/**
 * Module tạo âm thanh sóng biển bằng Web Audio API.
 * Hoạt động hoàn toàn ngoại tuyến, chỉ khởi tạo AudioContext khi người dùng bấm nút.
 */

class OceanWaveAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
    this.sourceNode = null;
    this.lfoOsc1 = null;
    this.lfoOsc2 = null;
    this.playing = false;
    this.volume = 0.45;
  }

  _createPinkBrownNoiseBuffer(ctx, durationSeconds = 8) {
    const sampleRate = ctx.sampleRate;
    const length = sampleRate * durationSeconds;
    const buffer = ctx.createBuffer(2, length, sampleRate);

    for (let channel = 0; channel < 2; channel += 1) {
      const output = buffer.getChannelData(channel);
      let b0 = 0;
      let b1 = 0;
      let b2 = 0;
      let b3 = 0;
      let b4 = 0;
      let b5 = 0;
      let b6 = 0;
      let lastOut = 0;

      for (let i = 0; i < length; i += 1) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        const pink = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        b6 = white * 0.115926;

        // Pha thêm nhiễu nâu dịu để tạo âm trầm của sóng vỗ
        lastOut = (lastOut + 0.025 * white) / 1.025;
        output[i] = (pink * 0.045 + lastOut * 1.15) * 0.6;
      }

      // Làm mượt điểm nối đầu/cuối để loop không bị tiếng tách
      const fadeSamples = Math.floor(sampleRate * 0.15);
      for (let i = 0; i < fadeSamples; i += 1) {
        const ratio = i / fadeSamples;
        output[i] *= ratio;
        output[length - 1 - i] *= ratio;
      }
    }

    return buffer;
  }

  _initGraph() {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
      throw new Error('Trình duyệt không hỗ trợ Web Audio API.');
    }

    const ctx = new AudioCtx();
    const noiseBuffer = this._createPinkBrownNoiseBuffer(ctx, 8);

    const source = ctx.createBufferSource();
    source.buffer = noiseBuffer;
    source.loop = true;

    // Bộ lọc thông thấp mô phỏng sóng cuộn từ xa vào bờ
    const waveFilter = ctx.createBiquadFilter();
    waveFilter.type = 'lowpass';
    waveFilter.frequency.value = 380;
    waveFilter.Q.value = 0.7;

    // Lớp lọc phụ làm dịu dải cao
    const warmthFilter = ctx.createBiquadFilter();
    warmthFilter.type = 'lowpass';
    warmthFilter.frequency.value = 1400;

    // Gain điều biến nhịp sóng lên xuống
    const swellGain = ctx.createGain();
    swellGain.gain.value = 0.52;

    // LFO 1: điều biến tần số lọc (chu kỳ ~9.5 giây mỗi con sóng)
    const lfoFreq = ctx.createOscillator();
    lfoFreq.type = 'sine';
    lfoFreq.frequency.value = 0.105;
    const lfoFreqDepth = ctx.createGain();
    lfoFreqDepth.gain.value = 260;
    lfoFreq.connect(lfoFreqDepth);
    lfoFreqDepth.connect(waveFilter.frequency);

    // LFO 2: điều biến biên độ âm lượng (chu kỳ ~11 giây tạo độ tự nhiên)
    const lfoAmp = ctx.createOscillator();
    lfoAmp.type = 'sine';
    lfoAmp.frequency.value = 0.09;
    const lfoAmpDepth = ctx.createGain();
    lfoAmpDepth.gain.value = 0.28;
    lfoAmp.connect(lfoAmpDepth);
    lfoAmpDepth.connect(swellGain.gain);

    // Master gain điều chỉnh bởi thanh trượt người dùng
    const masterGain = ctx.createGain();
    masterGain.gain.value = 0;

    source.connect(waveFilter);
    waveFilter.connect(warmthFilter);
    warmthFilter.connect(swellGain);
    swellGain.connect(masterGain);
    masterGain.connect(ctx.destination);

    source.start();
    lfoFreq.start();
    lfoAmp.start();

    this.ctx = ctx;
    this.sourceNode = source;
    this.lfoOsc1 = lfoFreq;
    this.lfoOsc2 = lfoAmp;
    this.masterGain = masterGain;
  }

  async start() {
    if (!this.ctx) {
      this._initGraph();
    }
    if (this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setTargetAtTime(this.volume, now, 0.35);
    this.playing = true;
    return true;
  }

  stop() {
    if (!this.ctx || !this.masterGain) {
      this.playing = false;
      return;
    }
    const now = this.ctx.currentTime;
    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setTargetAtTime(0.0001, now, 0.25);
    this.playing = false;
  }

  setVolume(val) {
    const clamped = Math.max(0, Math.min(1, Number(val)));
    this.volume = clamped;
    if (this.ctx && this.masterGain && this.playing) {
      const now = this.ctx.currentTime;
      this.masterGain.gain.setTargetAtTime(clamped, now, 0.08);
    }
  }

  getVolume() {
    return this.volume;
  }

  getIsPlaying() {
    return this.playing;
  }

  dispose() {
    try {
      if (this.sourceNode) this.sourceNode.stop();
      if (this.lfoOsc1) this.lfoOsc1.stop();
      if (this.lfoOsc2) this.lfoOsc2.stop();
      if (this.ctx) this.ctx.close();
    } catch {
      // Bỏ qua lỗi khi AudioContext đã đóng
    }
    this.ctx = null;
    this.masterGain = null;
    this.sourceNode = null;
    this.lfoOsc1 = null;
    this.lfoOsc2 = null;
    this.playing = false;
  }
}

export const oceanAudio = new OceanWaveAudioEngine();
