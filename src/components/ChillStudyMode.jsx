import { useState, useEffect, useRef } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Volume2,
  VolumeX,
  Moon,
  Waves,
} from 'lucide-react';
import { oceanAudio } from '../utils/oceanAudio';

const FOCUS_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;

export default function ChillStudyMode() {
  const [mode, setMode] = useState('focus'); // 'focus' | 'break'
  const [secondsLeft, setSecondsLeft] = useState(FOCUS_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const [completedSessions, setCompletedSessions] = useState(0);

  const [audioPlaying, setAudioPlaying] = useState(() => oceanAudio.getIsPlaying());
  const [volume, setVolume] = useState(() => Math.round(oceanAudio.getVolume() * 100));

  const timerRef = useRef(null);

  useEffect(() => {
    if (!isRunning) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setIsRunning(false);
          if (mode === 'focus') {
            setCompletedSessions((c) => c + 1);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, mode]);

  const handleSwitchMode = (nextMode) => {
    setIsRunning(false);
    setMode(nextMode);
    setSecondsLeft(nextMode === 'focus' ? FOCUS_SECONDS : BREAK_SECONDS);
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setSecondsLeft(mode === 'focus' ? FOCUS_SECONDS : BREAK_SECONDS);
  };

  const handleToggleAudio = async () => {
    if (audioPlaying) {
      oceanAudio.stop();
      setAudioPlaying(false);
    } else {
      await oceanAudio.start();
      setAudioPlaying(true);
    }
  };

  const handleVolumeChange = (e) => {
    const val = Number(e.target.value);
    setVolume(val);
    oceanAudio.setVolume(val / 100);
  };

  const totalDuration = mode === 'focus' ? FOCUS_SECONDS : BREAK_SECONDS;
  const progress = 1 - secondsLeft / totalDuration;
  const radius = 84;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress);

  const minutes = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
  const seconds = String(secondsLeft % 60).padStart(2, '0');

  return (
    <div className="space-y-4 pb-6 text-slate-100">
      {/* Banner biển đêm Đà Nẵng */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#071A30] via-[#0B2545] to-[#0F355E] border border-sky-300/15 p-5 shadow-lg">
        {/* Trăng và sao đêm trên biển */}
        <svg
          className="absolute top-0 right-0 w-44 h-32 opacity-80 pointer-events-none"
          viewBox="0 0 180 120"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="136" cy="34" r="14" fill="#FEF3C7" opacity="0.9" />
          <circle cx="142" cy="30" r="13" fill="#071A30" />
          <circle cx="72" cy="22" r="1.5" fill="#BAE6FD" />
          <circle cx="102" cy="48" r="1.2" fill="#BAE6FD" />
          <circle cx="44" cy="40" r="1.8" fill="#FDE68A" />
          <circle cx="160" cy="64" r="1.4" fill="#BAE6FD" />
        </svg>

        <div className="relative z-10">
          <div className="flex items-center gap-2 text-xs font-semibold text-teal-300">
            <Moon className="h-4 w-4" />
            <span>Biển Đêm Đà Nẵng</span>
          </div>
          <h2 className="mt-1 font-display text-xl font-bold text-white">
            Góc Chill Học Bài
          </h2>
          <p className="mt-1 text-xs text-sky-200/85 leading-relaxed">
            Bật tiếng sóng vỗ rì rào và tập trung 25 phút thật nhẹ nhàng nhé.
          </p>
        </div>

        {/* Bộ chọn chế độ Pomodoro */}
        <div className="mt-5 grid grid-cols-2 gap-1 p-1 rounded-2xl bg-black/25 border border-white/10">
          <button
            type="button"
            onClick={() => handleSwitchMode('focus')}
            className={`min-h-[44px] rounded-xl text-xs font-semibold transition-all ${
              mode === 'focus'
                ? 'bg-[#0D9488] text-white shadow-sm'
                : 'text-sky-200/80 hover:text-white'
            }`}
          >
            Tập trung · 25 phút
          </button>
          <button
            type="button"
            onClick={() => handleSwitchMode('break')}
            className={`min-h-[44px] rounded-xl text-xs font-semibold transition-all ${
              mode === 'break'
                ? 'bg-[#F97316] text-white shadow-sm'
                : 'text-sky-200/80 hover:text-white'
            }`}
          >
            Nghỉ ngơi · 05 phút
          </button>
        </div>

        {/* Vòng tròn đồng hồ Pomodoro */}
        <div className="mt-6 flex flex-col items-center">
          <div className="relative h-48 w-48 flex items-center justify-center">
            <svg className="h-full w-full -rotate-90" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="rgba(186, 230, 253, 0.14)"
                strokeWidth="10"
              />
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke={mode === 'focus' ? '#2DD4BF' : '#FB923C'}
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-500"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="font-display text-4xl font-bold tracking-tight text-white tabular-nums">
                {minutes}:{seconds}
              </span>
              <span className="mt-1 text-xs text-sky-200/80">
                {secondsLeft === 0
                  ? mode === 'focus'
                    ? 'Hoàn thành phiên học!'
                    : 'Hết giờ nghỉ rồi!'
                  : isRunning
                  ? mode === 'focus'
                    ? 'Đang tập trung'
                    : 'Thả lỏng mắt'
                  : 'Sẵn sàng'}
              </span>
            </div>
          </div>

          {/* Nút điều khiển đồng hồ */}
          <div className="mt-5 flex items-center gap-3 w-full">
            <button
              type="button"
              onClick={() => setIsRunning((prev) => !prev)}
              className="flex-1 min-h-[48px] rounded-2xl bg-[#FFFDF9] text-[#0F4C81] font-semibold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-transform"
            >
              {isRunning ? (
                <>
                  <Pause className="h-4 w-4" />
                  <span>Tạm dừng</span>
                </>
              ) : (
                <>
                  <Play className="h-4 w-4" />
                  <span>{secondsLeft === 0 ? 'Chạy lại' : 'Bắt đầu'}</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={handleResetTimer}
              aria-label="Đặt lại đồng hồ"
              className="min-h-[48px] min-w-[48px] rounded-2xl bg-white/10 hover:bg-white/15 text-white flex items-center justify-center active:scale-95 transition-all"
            >
              <RotateCcw className="h-5 w-5" />
            </button>
          </div>

          {completedSessions > 0 && (
            <p className="mt-3 text-xs text-teal-300 tabular-nums">
              Đã hoàn thành {completedSessions} phiên tập trung hôm nay
            </p>
          )}
        </div>
      </section>

      {/* Bộ điều khiển âm thanh sóng biển Web Audio API */}
      <section
        aria-label="Âm thanh sóng biển"
        className="rounded-3xl bg-[#0B2545] border border-sky-300/15 p-5 space-y-4 shadow-md"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div
              className={`h-11 w-11 rounded-2xl flex items-center justify-center transition-colors ${
                audioPlaying
                  ? 'bg-[#0D9488] text-white'
                  : 'bg-white/10 text-sky-200'
              }`}
            >
              <Waves className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold text-white">
                Tiếng Sóng Biển Rì Rào
              </h3>
              <p className="text-xs text-sky-200/75">
                {audioPlaying
                  ? 'Đang phát sóng biển Đà Nẵng'
                  : 'Chạm nút bên cạnh để bật âm thanh'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleToggleAudio}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 active:scale-95 ${
              audioPlaying
                ? 'bg-[#F97316] text-white'
                : 'bg-[#0D9488] text-white hover:bg-[#0b8277]'
            }`}
          >
            {audioPlaying ? 'Tắt sóng' : 'Bật sóng'}
          </button>
        </div>

        {/* Thanh chỉnh âm lượng mượt mà */}
        <div className="pt-3 border-t border-white/10 flex items-center gap-3">
          {volume === 0 || !audioPlaying ? (
            <VolumeX className="h-4 w-4 text-sky-300/70 shrink-0" />
          ) : (
            <Volume2 className="h-4 w-4 text-teal-300 shrink-0" />
          )}

          <label htmlFor="ocean-volume-slider" className="sr-only">
            Âm lượng tiếng sóng biển
          </label>
          <input
            id="ocean-volume-slider"
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-white/15 accent-[#2DD4BF]"
          />

          <span className="text-xs font-medium text-sky-200 tabular-nums w-9 text-right shrink-0">
            {volume}%
          </span>
        </div>
      </section>
    </div>
  );
}
