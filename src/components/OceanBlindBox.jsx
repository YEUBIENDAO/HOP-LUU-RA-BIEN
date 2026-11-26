import { useState } from 'react';
import { Gift, Grid, Lock, RotateCw, X, Waves } from 'lucide-react';
import { OCEAN_CARDS, RARITY_CONFIG } from '../data/oceanCards';
import { getVietnamTodayStr } from '../utils/lunarHelper';

const STORAGE_CARDS_KEY = 'hn_ltk_2026_2027_cards';
const STORAGE_LAST_OPEN_KEY = 'hn_ltk_2026_2027_last_open_date';
const STORAGE_LAST_CARD_KEY = 'hn_ltk_2026_2027_last_card_id';

function OceanCardArtwork({ svgType }) {
  switch (svgType) {
    case 'lighthouse':
      return (
        <svg viewBox="0 0 120 100" className="h-28 w-32 drop-shadow-sm" fill="none">
          <path d="M10 85 Q35 78 60 85 T110 85" stroke="#BAE6FD" strokeWidth="3" strokeLinecap="round" />
          <path d="M22 92 Q48 86 72 92 T105 91" stroke="#E0F2FE" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
          <path d="M52 24 L20 12 L20 38 Z" fill="#FDE68A" opacity="0.35" />
          <path d="M68 24 L100 12 L100 38 Z" fill="#FDE68A" opacity="0.35" />
          <path d="M51 78 L54 34 H66 L69 78 Z" fill="#FFFDF9" />
          <path d="M52.5 58 H67.5 L68 66 H52 Z" fill="#F97316" />
          <path d="M53.5 42 H66.5 L67 49 H53 Z" fill="#F97316" />
          <rect x="53" y="21" width="14" height="11" rx="2" fill="#FDE047" />
          <path d="M49 21 L60 11 L71 21 Z" fill="#0F4C81" />
          <rect x="46" y="77" width="28" height="6" rx="2" fill="#E2E8F0" />
        </svg>
      );
    case 'swiftlet':
      return (
        <svg viewBox="0 0 120 100" className="h-28 w-32 drop-shadow-sm" fill="none">
          <path d="M8 84 Q38 74 70 84 T114 82" stroke="#CCFBF1" strokeWidth="3" strokeLinecap="round" />
          <path d="M16 86 L34 46 L52 84 Z" fill="#134E4A" opacity="0.6" />
          <path d="M44 40 C54 22 72 22 86 28 C76 32 72 36 68 42 C82 36 96 34 106 38 C90 46 76 48 64 52 L56 64 L52 52 C42 50 32 54 24 60 C30 48 38 42 44 40 Z" fill="#FFFDF9" />
          <path d="M68 26 C78 16 90 14 100 18 C88 22 80 26 74 30 Z" fill="#99F6E4" />
          <circle cx="84" cy="30" r="1.5" fill="#0F4C81" />
        </svg>
      );
    case 'turtle':
      return (
        <svg viewBox="0 0 120 100" className="h-28 w-32 drop-shadow-sm" fill="none">
          <circle cx="24" cy="24" r="4" fill="#A7F3D0" opacity="0.5" />
          <circle cx="95" cy="22" r="3" fill="#A7F3D0" opacity="0.5" />
          <circle cx="90" cy="34" r="2" fill="#A7F3D0" opacity="0.6" />
          <path d="M35 38 C22 24 14 28 22 44 Z" fill="#6EE7B7" />
          <path d="M78 36 C92 22 100 28 90 44 Z" fill="#6EE7B7" />
          <path d="M38 68 C28 80 32 86 44 74 Z" fill="#34D399" />
          <path d="M76 68 C86 80 82 86 70 74 Z" fill="#34D399" />
          <ellipse cx="58" cy="25" rx="9" ry="11" fill="#6EE7B7" />
          <circle cx="55" cy="22" r="1.6" fill="#064E3B" />
          <circle cx="61" cy="22" r="1.6" fill="#064E3B" />
          <ellipse cx="58" cy="54" rx="22" ry="26" fill="#065F46" stroke="#A7F3D0" strokeWidth="2.5" />
          <path d="M58 34 L46 46 L50 62 L66 62 L70 46 Z" fill="#10B981" stroke="#A7F3D0" strokeWidth="1.5" />
        </svg>
      );
    case 'dolphin':
      return (
        <svg viewBox="0 0 120 100" className="h-28 w-32 drop-shadow-sm" fill="none">
          <path d="M12 78 Q40 68 65 78 T110 76" stroke="#BAE6FD" strokeWidth="3" strokeLinecap="round" />
          <path d="M22 66 C28 32 56 18 82 28 C92 32 98 40 104 46 C94 44 86 44 78 46 C68 48 56 56 44 58 C35 59 29 62 24 68 L14 73 L22 66 Z" fill="#FFFDF9" />
          <path d="M54 24 L62 12 L68 25 Z" fill="#99F6E4" />
          <path d="M40 53 C52 43 72 41 88 45 C74 50 56 56 40 53 Z" fill="#BAE6FD" />
          <circle cx="84" cy="35" r="1.8" fill="#0F4C81" />
        </svg>
      );
    case 'coral':
      return (
        <svg viewBox="0 0 120 100" className="h-28 w-32 drop-shadow-sm" fill="none">
          <path d="M14 86 H106" stroke="#FED7AA" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
          <path d="M60 85 V48 M60 66 L42 46 M42 46 L34 32 M42 46 L48 28 M60 58 L78 40 M78 40 L88 26 M78 40 L74 22 M60 48 L56 24" stroke="#FFF7ED" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60 85 V48 M60 66 L42 46 M42 46 L34 32 M42 46 L48 28 M60 58 L78 40 M78 40 L88 26 M78 40 L74 22 M60 48 L56 24" stroke="#FB7185" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="28" cy="60" r="3" fill="#FDE68A" opacity="0.8" />
          <circle cx="94" cy="54" r="2.5" fill="#FDE68A" opacity="0.8" />
        </svg>
      );
    case 'tree':
      return (
        <svg viewBox="0 0 120 100" className="h-28 w-32 drop-shadow-sm" fill="none">
          <path d="M16 82 Q60 72 104 82" fill="#FDE68A" opacity="0.4" />
          <path d="M58 80 C56 64 52 54 48 44" stroke="#FFFDF9" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M55 62 L72 48" stroke="#FFFDF9" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="48" cy="36" rx="22" ry="14" fill="#34D399" />
          <ellipse cx="72" cy="42" rx="18" ry="12" fill="#10B981" />
          <ellipse cx="60" cy="28" rx="18" ry="12" fill="#6EE7B7" />
          <circle cx="92" cy="22" r="7" fill="#FDE047" opacity="0.9" />
        </svg>
      );
    case 'ship':
      return (
        <svg viewBox="0 0 120 100" className="h-28 w-32 drop-shadow-sm" fill="none">
          <circle cx="92" cy="22" r="2" fill="#FDE047" />
          <circle cx="28" cy="26" r="1.5" fill="#FDE047" />
          <circle cx="52" cy="16" r="1.8" fill="#FDE047" />
          <path d="M18 68 L102 68 L90 82 H30 Z" fill="#FFFDF9" />
          <rect x="44" y="54" width="28" height="14" rx="2" fill="#E2E8F0" />
          <rect x="52" y="42" width="12" height="12" rx="1.5" fill="#F97316" />
          <line x1="60" y1="22" x2="60" y2="42" stroke="#FFFDF9" strokeWidth="2.5" />
          <path d="M60 22 L76 28 L60 34 Z" fill="#EF4444" />
          <path d="M10 86 Q35 79 60 86 T110 86" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" />
        </svg>
      );
    case 'landmark':
    default:
      return (
        <svg viewBox="0 0 120 100" className="h-28 w-32 drop-shadow-sm" fill="none">
          <path d="M22 82 H98 L90 88 H30 Z" fill="#E2E8F0" />
          <rect x="42" y="68" width="36" height="14" rx="2" fill="#FFFDF9" />
          <path d="M51 68 L54 24 H66 L69 68 Z" fill="#FFFDF9" />
          <path d="M54 24 L60 12 L66 24 Z" fill="#F59E0B" />
          <polygon points="60,30 62,36 68,36 63,40 65,46 60,42 55,46 57,40 52,36 58,36" fill="#EF4444" />
          <path d="M10 92 Q36 86 60 92 T110 92" stroke="#BAE6FD" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );
  }
}

function loadStoredCards() {
  try {
    const raw = localStorage.getItem(STORAGE_CARDS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function pickWeightedCard(ownedIds) {
  // Ưu tiên nhẹ các thẻ chưa sở hữu để trải nghiệm sưu tập hào hứng nhưng vẫn giữ đúng xác suất cấp độ
  const pool = OCEAN_CARDS.map((card) => {
    const baseWeight = RARITY_CONFIG[card.rarity]?.weight ?? 20;
    const bonus = ownedIds.includes(card.id) ? 1 : 2.2;
    return { card, weight: baseWeight * bonus };
  });

  const totalWeight = pool.reduce((sum, item) => sum + item.weight, 0);
  let r = Math.random() * totalWeight;
  for (const item of pool) {
    r -= item.weight;
    if (r <= 0) return item.card;
  }
  return OCEAN_CARDS[0];
}

export default function OceanBlindBox() {
  const todayStr = getVietnamTodayStr();
  const [activeSubTab, setActiveSubTab] = useState('open');
  const [ownedIds, setOwnedIds] = useState(() => loadStoredCards());
  const [lastOpenDate, setLastOpenDate] = useState(
    () => localStorage.getItem(STORAGE_LAST_OPEN_KEY) || ''
  );
  const [todayCard, setTodayCard] = useState(() => {
    const savedDate = localStorage.getItem(STORAGE_LAST_OPEN_KEY);
    const savedCardId = localStorage.getItem(STORAGE_LAST_CARD_KEY);
    if (savedDate === todayStr && savedCardId) {
      return OCEAN_CARDS.find((c) => c.id === savedCardId) || null;
    }
    return null;
  });

  const [isShaking, setIsShaking] = useState(false);
  const [isFlipped, setIsFlipped] = useState(() => Boolean(todayCard));
  const [isNewDiscovery, setIsNewDiscovery] = useState(false);
  const [inspectCard, setInspectCard] = useState(null);

  const alreadyOpenedToday = lastOpenDate === todayStr && Boolean(todayCard);

  const handleOpenBox = () => {
    if (isShaking || alreadyOpenedToday) return;

    setIsShaking(true);
    setIsFlipped(false);

    setTimeout(() => {
      const picked = pickWeightedCard(ownedIds);
      const isNew = !ownedIds.includes(picked.id);
      const updatedOwned = isNew ? [...ownedIds, picked.id] : ownedIds;

      setOwnedIds(updatedOwned);
      setTodayCard(picked);
      setLastOpenDate(todayStr);
      setIsNewDiscovery(isNew);

      try {
        localStorage.setItem(STORAGE_CARDS_KEY, JSON.stringify(updatedOwned));
        localStorage.setItem(STORAGE_LAST_OPEN_KEY, todayStr);
        localStorage.setItem(STORAGE_LAST_CARD_KEY, picked.id);
      } catch {
        // Bỏ qua nếu bộ nhớ trình duyệt bị chặn
      }

      setIsShaking(false);
      // Kích hoạt lật thẻ 3D ngay sau khi hộp mở
      requestAnimationFrame(() => {
        setTimeout(() => setIsFlipped(true), 80);
      });
    }, 680);
  };

  return (
    <div className="space-y-4 pb-6">
      {/* Tiêu đề & Tab chuyển đổi */}
      <div className="text-center pt-1">
        <h2 className="font-display text-xl font-bold text-[#0F4C81]">
          Túi Mù Đại Dương
        </h2>
        <p className="mt-0.5 text-xs text-slate-600">
          Mỗi ngày 1 hộp quà bí ẩn về biển đảo Việt Nam
        </p>
      </div>

      {/* Segmented Control */}
      <div className="grid grid-cols-2 gap-1 p-1 rounded-2xl bg-[#0F4C81]/8">
        <button
          type="button"
          onClick={() => setActiveSubTab('open')}
          className={`min-h-[44px] rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
            activeSubTab === 'open'
              ? 'bg-[#FFFDF9] text-[#0F4C81] shadow-sm'
              : 'text-slate-600 hover:text-[#0F4C81]'
          }`}
        >
          <Gift className="h-4 w-4" />
          <span>Mở Túi Mù</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveSubTab('collection')}
          className={`min-h-[44px] rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 tabular-nums ${
            activeSubTab === 'collection'
              ? 'bg-[#FFFDF9] text-[#0F4C81] shadow-sm'
              : 'text-slate-600 hover:text-[#0F4C81]'
          }`}
        >
          <Grid className="h-4 w-4" />
          <span>Bộ Sưu Tập ({ownedIds.length}/{OCEAN_CARDS.length})</span>
        </button>
      </div>

      {activeSubTab === 'open' ? (
        <div className="rounded-3xl bg-[#FFFDF9] border border-[#0F4C81]/10 p-5 shadow-sm">
          {!todayCard ? (
            <div className="flex flex-col items-center text-center py-4">
              {/* Hộp quà Túi Mù Đại Dương chưa mở */}
              <button
                type="button"
                onClick={handleOpenBox}
                disabled={isShaking}
                aria-label="Chạm để mở Túi Mù Đại Dương hôm nay"
                className={`group relative w-52 h-64 rounded-3xl flex flex-col items-center justify-center p-5 text-white shadow-lg transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0F4C81] ${
                  isShaking ? 'animate-box-shake' : 'animate-gentle-float'
                }`}
                style={{
                  background:
                    'linear-gradient(150deg, #0F4C81 0%, #0D9488 65%, #38BDF8 100%)',
                }}
              >
                <div className="absolute inset-2 rounded-2xl border border-white/25 pointer-events-none" />
                <div className="h-16 w-16 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                  <Gift className="h-9 w-9 text-amber-200" />
                </div>
                <p className="font-display text-lg font-bold">
                  {isShaking ? 'Đang mở sóng...' : 'Túi Mù Bí Ẩn'}
                </p>
                <p className="mt-1 text-xs text-sky-100/90">
                  Biển đảo Việt Nam · 2026–2027
                </p>
                <div className="mt-5 flex items-center gap-1.5 text-[11px] font-semibold text-amber-200">
                  <Waves className="h-3.5 w-3.5" />
                  <span>Chạm để khám phá</span>
                </div>
              </button>

              <button
                type="button"
                onClick={handleOpenBox}
                disabled={isShaking}
                className="mt-6 w-full min-h-[48px] rounded-2xl bg-[#F97316] hover:bg-[#ea580c] text-white font-semibold text-sm shadow-sm active:scale-[0.98] transition-all"
              >
                {isShaking ? 'Đang lắc túi mù...' : 'Mở Túi Mù Hôm Nay'}
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              {/* Trạng thái nhận thẻ */}
              <div className="mb-3 text-center">
                <p className="text-xs font-semibold text-[#0D9488]">
                  {isNewDiscovery
                    ? 'Chúc mừng! Bạn vừa mở được thẻ mới!'
                    : 'Thẻ biển đảo hôm nay của bạn'}
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Chạm vào thẻ để lật xem mặt trước / mặt sau
                </p>
              </div>

              {/* Khung lật thẻ 3D */}
              <div className="w-full max-w-[300px] perspective-1000">
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setIsFlipped((prev) => !prev)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsFlipped((prev) => !prev);
                    }
                  }}
                  aria-label={`Lật thẻ ${todayCard.name}`}
                  className={`relative w-full h-[380px] preserve-3d transition-transform duration-700 cursor-pointer ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Mặt úp (lưng thẻ) */}
                  <div
                    className="absolute inset-0 backface-hidden rounded-3xl p-5 flex flex-col items-center justify-center text-white shadow-md border border-white/20"
                    style={{
                      background:
                        'linear-gradient(145deg, #0F4C81 0%, #0D9488 100%)',
                    }}
                  >
                    <div className="absolute inset-3 rounded-2xl border border-dashed border-white/30" />
                    <Waves className="h-10 w-10 text-sky-200 mb-3" />
                    <p className="font-display text-base font-bold text-center">
                      Hợp Lưu Ra Biển Lớn
                    </p>
                    <p className="mt-1 text-xs text-sky-100/80">
                      Chạm để lật thẻ
                    </p>
                  </div>

                  {/* Mặt ngửa (chi tiết thẻ bài) */}
                  <div
                    className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl p-5 flex flex-col justify-between text-white shadow-lg border border-white/20"
                    style={{ background: todayCard.gradient }}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold tracking-wide text-amber-200">
                        {todayCard.rarity}
                      </span>
                      <RotateCw className="h-4 w-4 text-white/75" />
                    </div>

                    <div className="my-2 flex flex-col items-center text-center">
                      <div className="rounded-2xl bg-white/12 p-3 mb-3">
                        <OceanCardArtwork svgType={todayCard.svgType} />
                      </div>
                      <h3 className="font-display text-xl font-bold leading-snug">
                        {todayCard.name}
                      </h3>
                      <p className="text-xs text-white/85 mt-1">
                        {todayCard.location}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-white/20 text-[11px] text-white/90 text-center">
                      Đã lưu vào Bộ sưu tập cá nhân
                    </div>
                  </div>
                </div>
              </div>

              {/* 2 câu chuyện thú vị của thẻ vừa mở */}
              <div className="mt-5 w-full space-y-2.5 pt-4 border-t border-slate-200/75">
                <h4 className="text-xs font-semibold text-[#0F4C81]">
                  2 điều thú vị về {todayCard.name}
                </h4>
                {todayCard.facts.map((fact, idx) => (
                  <p
                    key={idx}
                    className="text-xs leading-relaxed text-slate-700"
                  >
                    <span className="font-semibold text-[#0D9488] mr-1.5">
                      0{idx + 1}.
                    </span>
                    {fact}
                  </p>
                ))}
              </div>

              <p className="mt-4 text-[11px] text-slate-500 text-center">
                Hẹn bạn ngày mai quay lại săn thêm thẻ biển đảo mới nhé!
              </p>
            </div>
          )}
        </div>
      ) : (
        /* Tab Bộ sưu tập của tôi */
        <div className="grid grid-cols-2 gap-3">
          {OCEAN_CARDS.map((card) => {
            const isUnlocked = ownedIds.includes(card.id);
            const rarityStyle = RARITY_CONFIG[card.rarity];

            if (!isUnlocked) {
              return (
                <div
                  key={card.id}
                  className="rounded-2xl bg-slate-100 border border-slate-200/80 p-3.5 flex flex-col items-center justify-center text-center min-h-[192px] select-none"
                >
                  <div className="h-12 w-12 rounded-2xl bg-slate-200/80 text-slate-400 flex items-center justify-center mb-2.5">
                    <Lock className="h-5 w-5" />
                  </div>
                  <p className="font-display text-sm font-bold text-slate-400">
                    ???
                  </p>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Cấp {card.rarity}
                  </p>
                </div>
              );
            }

            return (
              <button
                key={card.id}
                type="button"
                onClick={() => setInspectCard(card)}
                className="rounded-2xl p-3.5 text-left text-white min-h-[192px] flex flex-col justify-between shadow-sm active:scale-[0.97] transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F4C81]"
                style={{ background: card.gradient }}
              >
                <div className="flex items-center justify-between text-[11px]">
                  <span
                    className="font-semibold"
                    style={{ color: '#FEF3C7' }}
                  >
                    {rarityStyle.label}
                  </span>
                </div>

                <div className="my-1 flex justify-center">
                  <div className="scale-75 origin-center -my-3">
                    <OceanCardArtwork svgType={card.svgType} />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-sm font-bold leading-tight">
                    {card.name}
                  </h3>
                  <p className="text-[11px] text-white/80 truncate mt-0.5">
                    {card.location}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Modal xem chi tiết thẻ đã sưu tầm */}
      {inspectCard && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-3"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-card-title"
          onClick={() => setInspectCard(null)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-[#FFFDF9] overflow-hidden shadow-2xl animate-note-pop"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="p-5 text-white relative"
              style={{ background: inspectCard.gradient }}
            >
              <button
                type="button"
                onClick={() => setInspectCard(null)}
                aria-label="Đóng thẻ bài"
                className="absolute top-3 right-3 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl bg-black/20 hover:bg-black/30 text-white"
              >
                <X className="h-5 w-5" />
              </button>
              <p className="text-xs font-semibold text-amber-200">
                {inspectCard.rarity}
              </p>
              <div className="my-3 flex justify-center">
                <OceanCardArtwork svgType={inspectCard.svgType} />
              </div>
              <h3
                id="modal-card-title"
                className="font-display text-xl font-bold text-center"
              >
                {inspectCard.name}
              </h3>
              <p className="text-xs text-white/85 text-center mt-1">
                {inspectCard.location}
              </p>
            </div>

            <div className="p-5 space-y-3">
              {inspectCard.facts.map((fact, idx) => (
                <p key={idx} className="text-sm leading-relaxed text-slate-700">
                  <span className="font-semibold text-[#0D9488] mr-1.5">
                    0{idx + 1}.
                  </span>
                  {fact}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
