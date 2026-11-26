import { useState } from 'react';
import { Sparkles, HeartHandshake, RefreshCw } from 'lucide-react';
import { TEACHER_MESSAGES } from '../data/teacherMessages';

const STORAGE_READ_NOTES_KEY = 'hn_ltk_2026_2027_read_notes';

function loadReadNotes() {
  try {
    const raw = localStorage.getItem(STORAGE_READ_NOTES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export default function TeacherJar() {
  const [isShaking, setIsShaking] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);
  const [noteKey, setNoteKey] = useState(0);
  const [readIds, setReadIds] = useState(() => loadReadNotes());

  const handleShakeJar = () => {
    if (isShaking) return;
    setIsShaking(true);

    setTimeout(() => {
      // Ưu tiên chọn ngẫu nhiên lời nhắn khác với lời nhắn đang hiện
      const candidates = currentNote
        ? TEACHER_MESSAGES.filter((item) => item.id !== currentNote.id)
        : TEACHER_MESSAGES;
      const picked = candidates[Math.floor(Math.random() * candidates.length)];

      setCurrentNote(picked);
      setNoteKey((prev) => prev + 1);
      setIsShaking(false);

      if (!readIds.includes(picked.id)) {
        const updated = [...readIds, picked.id];
        setReadIds(updated);
        try {
          localStorage.setItem(STORAGE_READ_NOTES_KEY, JSON.stringify(updated));
        } catch {
          // Bỏ qua nếu bộ nhớ bị hạn chế
        }
      }
    }, 560);
  };

  return (
    <div className="space-y-4 pb-6">
      <div className="text-center pt-1">
        <h2 className="font-display text-xl font-bold text-[#0F4C81]">
          Hũ Lời Nhắn Thầy Cô
        </h2>
        <p className="mt-0.5 text-xs text-slate-600">
          Lắc hũ thủy tinh để rút 1 mảnh giấy gửi từ thầy cô hai trường
        </p>
      </div>

      {/* Khu vực Hũ thủy tinh tương tác */}
      <section className="rounded-3xl bg-[#FFFDF9] border border-[#0F4C81]/10 p-5 shadow-sm flex flex-col items-center">
        <button
          type="button"
          onClick={handleShakeJar}
          disabled={isShaking}
          aria-label="Lắc hũ thủy tinh nhận lời nhắn"
          className={`relative p-3 rounded-3xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F4C81] transition-transform active:scale-95 ${
            isShaking ? 'animate-jar-shake' : ''
          }`}
        >
          {/* Hình minh họa SVG hũ thủy tinh chứa giấy nhắn */}
          <svg
            width="160"
            height="190"
            viewBox="0 0 160 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-sm"
          >
            {/* Nắp gỗ bần */}
            <rect x="46" y="10" width="68" height="18" rx="6" fill="#D97706" />
            <rect x="46" y="22" width="68" height="6" rx="2" fill="#B45309" />
            {/* Cổ lọ & dây thừng nhỏ */}
            <rect x="40" y="28" width="80" height="10" rx="5" fill="#E0F2FE" stroke="#0F4C81" strokeWidth="2.5" />
            <path d="M42 33 H118" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />

            {/* Thân hũ thủy tinh */}
            <path
              d="M34 46 C26 54 24 68 24 88 V156 C24 170 34 178 48 178 H112 C126 178 136 170 136 156 V88 C136 68 134 54 126 46 L118 38 H42 L34 46 Z"
              fill="#F0F9FF"
              stroke="#0F4C81"
              strokeWidth="3"
            />

            {/* Ánh phản chiếu thủy tinh */}
            <path
              d="M36 74 V148"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              d="M36 58 V64"
              stroke="#FFFFFF"
              strokeWidth="5"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Các cuộn giấy & ngôi sao lời nhắn bên trong hũ */}
            <g transform="rotate(-14 54 146)">
              <rect x="40" y="136" width="32" height="16" rx="5" fill="#F97316" />
              <line x1="56" y1="136" x2="56" y2="152" stroke="#FFFDF9" strokeWidth="2" />
            </g>
            <g transform="rotate(18 98 148)">
              <rect x="82" y="138" width="34" height="16" rx="5" fill="#0D9488" />
              <line x1="99" y1="138" x2="99" y2="154" stroke="#FFFDF9" strokeWidth="2" />
            </g>
            <g transform="rotate(-6 74 126)">
              <rect x="56" y="116" width="34" height="16" rx="5" fill="#38BDF8" />
              <line x1="73" y1="116" x2="73" y2="132" stroke="#FFFDF9" strokeWidth="2" />
            </g>
            <g transform="rotate(11 56 106)">
              <rect x="38" y="96" width="32" height="15" rx="5" fill="#FBBF24" />
              <line x1="54" y1="96" x2="54" y2="111" stroke="#FFFDF9" strokeWidth="2" />
            </g>
            <g transform="rotate(-18 104 114)">
              <rect x="88" y="106" width="30" height="15" rx="5" fill="#FB7185" />
              <line x1="103" y1="106" x2="103" y2="121" stroke="#FFFDF9" strokeWidth="2" />
            </g>
            <g transform="rotate(6 80 86)">
              <rect x="64" y="78" width="30" height="14" rx="5" fill="#0F4C81" />
              <line x1="79" y1="78" x2="79" y2="92" stroke="#FFFDF9" strokeWidth="2" />
            </g>

            {/* Nhãn dán trên mặt hũ */}
            <rect x="48" y="64" width="64" height="24" rx="6" fill="#FFFDF9" stroke="#0F4C81" strokeWidth="1.5" opacity="0.92" />
            <text
              x="80"
              y="80"
              textAnchor="middle"
              fill="#0F4C81"
              fontSize="10"
              fontWeight="700"
            >
              HỒ NGHINH x LTK
            </text>
          </svg>
        </button>

        <button
          type="button"
          onClick={handleShakeJar}
          disabled={isShaking}
          className="mt-2 w-full min-h-[48px] rounded-2xl bg-[#0F4C81] hover:bg-[#0c3f6b] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all"
        >
          {currentNote ? (
            <RefreshCw className={`h-4 w-4 ${isShaking ? 'animate-spin' : ''}`} />
          ) : (
            <Sparkles className="h-4 w-4 text-amber-300" />
          )}
          <span>
            {isShaking
              ? 'Đang lắc hũ lời nhắn...'
              : currentNote
              ? 'Lắc tiếp mảnh giấy khác'
              : 'Lắc hũ nhận lời nhắn'}
          </span>
        </button>

        <p className="mt-3 text-xs text-slate-500 tabular-nums">
          Đã mở {readIds.length}/{TEACHER_MESSAGES.length} lời nhắn từ thầy cô
        </p>
      </section>

      {/* Mảnh giấy nhắn được rút ra */}
      {currentNote && (
        <article
          key={noteKey}
          aria-live="polite"
          className="animate-note-pop rounded-3xl bg-[#FFFDF9] border border-[#F97316]/30 p-5 shadow-md space-y-3"
        >
          <div className="flex items-center justify-between text-xs">
            <span className="inline-flex items-center gap-1.5 font-semibold text-[#F97316]">
              <HeartHandshake className="h-4 w-4" />
              <span>{currentNote.sender}</span>
            </span>
            <span className="text-slate-400 tabular-nums">
              Lời nhắn #{String(currentNote.id).padStart(2, '0')}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-slate-800 font-medium">
            “{currentNote.message}”
          </p>
        </article>
      )}
    </div>
  );
}
