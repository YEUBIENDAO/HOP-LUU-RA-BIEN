import { useState, useRef, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Compass,
  CalendarDays,
  Sun,
  Waves,
  Sparkles,
  Anchor,
} from 'lucide-react';
import {
  getVietnamTodayStr,
  parseDateStr,
  shiftDateStr,
  getDayOfWeekVN,
  getLunarDetails,
  getNextSchoolMilestone,
} from '../utils/lunarHelper';
import { getCalendarDayData } from '../data/calendarData';

const DOLPHIN_WISHES = [
  'Cá heo Sơn Trà chúc bạn hôm nay làm bài tập trôi chảy như nước!',
  'Tín hiệu may mắn từ Biển Đông: Tiết kiểm tra tiếp theo auto tự tin!',
  'Gió biển Đà Nẵng gửi bạn 100% năng lượng tích cực cho cả ngày dài!',
  'Chú cá heo vừa nhảy sóng chúc team Hồ Nghinh x Lý Thường Kiệt luôn vui vẻ!',
];

export default function CalendarSheet() {
  const todayStr = getVietnamTodayStr();
  const [selectedDate, setSelectedDate] = useState(todayStr);
  const [animDirection, setAnimDirection] = useState('next');
  const [animKey, setAnimKey] = useState(0);
  const [imgFailed, setImgFailed] = useState(false);

  // Easter Egg: chạm 3 lần liên tiếp vào biểu tượng Mặt trời
  const [sunTapCount, setSunTapCount] = useState(0);
  const [dolphinActive, setDolphinActive] = useState(false);
  const [dolphinWish, setDolphinWish] = useState(DOLPHIN_WISHES[0]);
  const tapTimerRef = useRef(null);
  const dolphinTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (tapTimerRef.current) clearTimeout(tapTimerRef.current);
      if (dolphinTimerRef.current) clearTimeout(dolphinTimerRef.current);
    };
  }, []);

  const handleChangeDate = (newDate, direction) => {
    setImgFailed(false);
    setAnimDirection(direction);
    setAnimKey((prev) => prev + 1);
    setSelectedDate(newDate);
  };

  const handlePrevDay = () => {
    handleChangeDate(shiftDateStr(selectedDate, -1), 'prev');
  };

  const handleNextDay = () => {
    handleChangeDate(shiftDateStr(selectedDate, 1), 'next');
  };

  const handleGoToday = () => {
    if (selectedDate === todayStr) {
      setAnimKey((prev) => prev + 1);
      return;
    }
    const dir = selectedDate < todayStr ? 'next' : 'prev';
    handleChangeDate(todayStr, dir);
  };

  const handleJumpMilestone = (targetDate) => {
    if (selectedDate === targetDate) return;
    const dir = selectedDate < targetDate ? 'next' : 'prev';
    handleChangeDate(targetDate, dir);
  };

  const handleSunTap = () => {
    if (tapTimerRef.current) clearTimeout(tapTimerRef.current);

    const nextCount = sunTapCount + 1;
    if (nextCount >= 3) {
      setSunTapCount(0);
      const randomWish =
        DOLPHIN_WISHES[Math.floor(Math.random() * DOLPHIN_WISHES.length)];
      setDolphinWish(randomWish);
      setDolphinActive(true);
      if (dolphinTimerRef.current) clearTimeout(dolphinTimerRef.current);
      dolphinTimerRef.current = setTimeout(() => {
        setDolphinActive(false);
      }, 4100);
    } else {
      setSunTapCount(nextCount);
      tapTimerRef.current = setTimeout(() => {
        setSunTapCount(0);
      }, 2000);
    }
  };

  const { year, month, day } = parseDateStr(selectedDate);
  const weekdayVN = getDayOfWeekVN(selectedDate);
  const lunar = getLunarDetails(selectedDate);
  const dayData = getCalendarDayData(selectedDate);
  const nextMilestone = getNextSchoolMilestone(selectedDate);
  const isToday = selectedDate === todayStr;

  const isSunday = weekdayVN === 'Chủ Nhật';

  return (
    <div className="relative space-y-4 pb-6">
      {/* Lớp Easter Egg cá heo bơi ngang màn hình */}
      {dolphinActive && (
        <div
          className="fixed inset-x-0 top-20 z-50 pointer-events-none overflow-hidden px-4"
          aria-live="polite"
        >
          <div className="animate-dolphin-swim inline-flex items-center gap-2">
            <svg
              width="74"
              height="46"
              viewBox="0 0 80 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-md"
            >
              <path
                d="M12 31C18 16 36 8 54 14C62 17 69 24 73 30C66 29 60 28 54 29C47 30 41 34 34 34C27 34 21 31 16 32L9 39L12 31Z"
                fill="#0F4C81"
              />
              <path
                d="M36 11L42 2L47 12C43 11 39 11 36 11Z"
                fill="#0D9488"
              />
              <path
                d="M24 29C32 23 47 22 61 27C53 31 39 33 24 29Z"
                fill="#BAE6FD"
              />
              <circle cx="59" cy="21" r="1.8" fill="#FFFDF9" />
              <path
                d="M4 37C10 34 15 38 22 36"
                stroke="#38BDF8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="mx-auto mt-2 max-w-sm rounded-2xl bg-[#0F4C81] px-4 py-3 text-white shadow-lg border border-sky-300/30">
            <div className="flex items-start gap-2.5">
              <Sparkles className="h-4 w-4 text-[#F97316] shrink-0 mt-0.5" />
              <p className="text-xs font-medium leading-relaxed">{dolphinWish}</p>
            </div>
          </div>
        </div>
      )}

      {/* Huy hiệu kỷ niệm hợp lưu */}
      <div className="text-center px-2 pt-1">
        <div className="inline-flex items-center justify-center gap-2 text-[11px] font-semibold tracking-wide text-[#0F4C81]/85">
          <Anchor className="h-3.5 w-3.5 text-[#0D9488]" />
          <span>Hồ Nghinh x Lý Thường Kiệt</span>
          <span aria-hidden="true">·</span>
          <span>Năm đầu hợp lưu 2026–2027</span>
        </div>
      </div>

      {/* Khối Tờ lịch xé tay kỹ thuật số */}
      <section
        aria-label="Tờ lịch niên học"
        className="relative overflow-hidden rounded-3xl bg-[#FFFDF9] border border-[#0F4C81]/12 shadow-[0_12px_32px_-12px_rgba(15,76,129,0.18)]"
      >
        {/* Gáy xé lịch phía trên */}
        <div className="bg-[#0F4C81] px-5 pt-3.5 pb-3 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium text-sky-100/90">
                Tháng {String(month).padStart(2, '0')} / {year}
              </p>
              <p className="font-display text-sm font-bold tracking-tight text-white">
                {dayData.badge}
              </p>
            </div>

            {/* Biểu tượng Mặt trời (Easter Egg: chạm 3 lần) */}
            <button
              type="button"
              onClick={handleSunTap}
              aria-label="Mặt trời trên biển"
              className="relative min-h-[44px] min-w-[44px] flex items-center justify-center rounded-2xl bg-white/10 hover:bg-white/20 active:scale-90 transition-transform focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Sun
                className={`h-6 w-6 transition-transform duration-200 ${
                  sunTapCount > 0 ? 'text-amber-300 rotate-45 scale-110' : 'text-amber-200'
                }`}
              />
              {sunTapCount > 0 && (
                <span className="sr-only">Đã chạm {sunTapCount} lần</span>
              )}
            </button>
          </div>

          {/* Răng cưa xé giấy lịch tinh tế */}
          <div
            className="mt-3 flex justify-between gap-1.5 opacity-35"
            aria-hidden="true"
          >
            {Array.from({ length: 16 }).map((_, idx) => (
              <span
                key={idx}
                className="h-1.5 w-1.5 rounded-full bg-[#FFFDF9]"
              />
            ))}
          </div>
        </div>

        {/* Nội dung mặt lịch có hiệu ứng chuyển tờ */}
        <div
          key={animKey}
          className={`px-5 pt-5 pb-6 ${
            animDirection === 'next'
              ? 'animate-calendar-next'
              : 'animate-calendar-prev'
          }`}
        >
          {/* Thứ & Trạng thái hôm nay */}
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span
              className={`font-semibold text-sm ${
                isSunday ? 'text-[#F97316]' : 'text-[#0D9488]'
              }`}
            >
              {weekdayVN}
            </span>
            <span className="text-slate-500 tabular-nums">
              {isToday ? 'Hôm nay · Giờ Việt Nam' : `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${year}`}
            </span>
          </div>

          {/* Ảnh kỷ niệm trang trí tờ lịch */}
          {dayData.photo && (
            <figure className="mt-3.5 overflow-hidden rounded-2xl border border-[#0F4C81]/10 bg-sky-50">
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                {!imgFailed ? (
                  <img
                    src={dayData.photo}
                    alt={dayData.photoCaption || dayData.badge}
                    referrerPolicy="no-referrer"
                    onError={() => setImgFailed(true)}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="h-full w-full flex flex-col items-center justify-center bg-gradient-to-br from-[#0F4C81] to-[#0D9488] text-white p-4 text-center">
                    <Anchor className="h-6 w-6 mb-1.5 text-sky-200" />
                    <span className="text-xs font-medium">{dayData.badge}</span>
                  </div>
                )}
                <div
                  className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-950/65 via-slate-950/20 to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                {dayData.photoCaption && (
                  <figcaption className="absolute inset-x-3 bottom-2 text-[11px] font-medium text-white/95 leading-snug drop-shadow-sm">
                    {dayData.photoCaption}
                  </figcaption>
                )}
              </div>
            </figure>
          )}

          {/* Ngày Dương lịch cỡ lớn */}
          <div className="my-4 flex flex-col items-center text-center">
            <div
              className={`font-display text-[5.25rem] leading-none font-bold tracking-tight tabular-nums select-none ${
                isSunday ? 'text-[#F97316]' : 'text-[#0F4C81]'
              }`}
            >
              {String(day).padStart(2, '0')}
            </div>

            {/* Ngày Âm lịch Việt Nam */}
            <div className="mt-3 space-y-0.5">
              <p className="text-sm font-semibold text-slate-700">
                Âm lịch: {lunar.formattedFull}
              </p>
              <p className="text-xs text-slate-500">
                Ngày {lunar.canChiDay} · Tháng {lunar.canChiMonth}
              </p>
            </div>
          </div>

          {/* Thanh điều hướng Trước / Hôm nay / Sau */}
          <div className="mt-4 flex items-center justify-between gap-2 pt-3 border-t border-slate-200/75">
            <button
              type="button"
              onClick={handlePrevDay}
              className="min-h-[44px] px-3.5 py-2 flex items-center gap-1 rounded-xl text-xs font-semibold text-[#0F4C81] hover:bg-sky-50 active:scale-95 transition-all whitespace-nowrap shrink-0"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Hôm trước</span>
            </button>

            <button
              type="button"
              onClick={handleGoToday}
              className={`min-h-[44px] px-4 py-2 flex items-center gap-1.5 rounded-xl text-xs font-semibold transition-all whitespace-nowrap shrink-0 active:scale-95 ${
                isToday
                  ? 'bg-[#0F4C81]/8 text-[#0F4C81]'
                  : 'bg-[#0F4C81] text-white shadow-sm hover:bg-[#0c3f6b]'
              }`}
            >
              <CalendarDays className="h-3.5 w-3.5" />
              <span>Hôm nay</span>
            </button>

            <button
              type="button"
              onClick={handleNextDay}
              className="min-h-[44px] px-3.5 py-2 flex items-center gap-1 rounded-xl text-xs font-semibold text-[#0F4C81] hover:bg-sky-50 active:scale-95 transition-all whitespace-nowrap shrink-0"
            >
              <span>Ngày sau</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Lối tắt nhanh tới các ngày tiêu biểu của năm học */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-500">
            <span>Mốc nhớ:</span>
            <button
              type="button"
              onClick={() => handleJumpMilestone('2026-09-05')}
              className={`min-h-[36px] px-2.5 py-1 rounded-lg font-medium transition-colors ${
                selectedDate === '2026-09-05'
                  ? 'bg-[#0D9488] text-white'
                  : 'hover:bg-slate-100 text-[#0F4C81]'
              }`}
            >
              Khai giảng 05/09
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => handleJumpMilestone('2026-11-20')}
              className={`min-h-[36px] px-2.5 py-1 rounded-lg font-medium transition-colors ${
                selectedDate === '2026-11-20'
                  ? 'bg-[#F97316] text-white'
                  : 'hover:bg-slate-100 text-[#0F4C81]'
              }`}
            >
              Nhà giáo 20/11
            </button>
          </div>
        </div>
      </section>

      {/* Đồng hồ đếm ngược tới sự kiện lớn tiếp theo */}
      <section
        aria-label="Đếm ngược sự kiện"
        className="rounded-2xl bg-[#FFFDF9] border border-[#0F4C81]/10 px-4 py-3.5 flex items-center justify-between gap-3"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center shrink-0">
            <Compass className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-slate-500">
              Hải trình tiếp theo
            </p>
            <p className="text-sm font-semibold text-[#0F4C81] truncate">
              {nextMilestone.title}
            </p>
          </div>
        </div>

        <div className="text-right shrink-0">
          <span className="font-display text-lg font-bold text-[#F97316] tabular-nums">
            {nextMilestone.daysLeft === 0
              ? 'Hôm nay'
              : `${nextMilestone.daysLeft} ngày`}
          </span>
        </div>
      </section>

      {/* Tín hiệu từ Biển cả & Góc Hợp Lưu */}
      <section className="rounded-3xl bg-[#FFFDF9] border border-[#0F4C81]/10 p-5 space-y-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0D9488]">
            <Waves className="h-4 w-4 shrink-0" />
            <h3>Tín hiệu từ Biển cả</h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            {dayData.oceanSignal}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-200/75">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#F97316]">
            <Sparkles className="h-4 w-4 shrink-0" />
            <h3>Góc Hợp Lưu Hồ Nghinh x Lý Thường Kiệt</h3>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-700">
            {dayData.confluenceStory}
          </p>
        </div>
      </section>
    </div>
  );
}
