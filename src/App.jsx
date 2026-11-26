import { useState } from 'react';
import { CalendarDays, Gift, HeartHandshake, Moon } from 'lucide-react';
import CalendarSheet from './components/CalendarSheet';
import OceanBlindBox from './components/OceanBlindBox';
import TeacherJar from './components/TeacherJar';
import ChillStudyMode from './components/ChillStudyMode';

const NAV_TABS = [
  { id: 'calendar', label: 'Tờ lịch', Icon: CalendarDays },
  { id: 'blindbox', label: 'Túi mù', Icon: Gift },
  { id: 'jar', label: 'Hũ lời nhắn', Icon: HeartHandshake },
  { id: 'chill', label: 'Chill học bài', Icon: Moon },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('calendar');
  const isNightMode = activeTab === 'chill';

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isNightMode
          ? 'bg-gradient-to-b from-[#04101E] via-[#06182D] to-[#08203B] text-slate-100'
          : 'bg-gradient-to-b from-[#E7F3FB] via-[#DCEEF9] to-[#CFE6F5] text-slate-800'
      }`}
    >
      {/* Khung ứng dụng tối ưu cho điện thoại, căn giữa dịu mắt trên máy tính */}
      <div
        className={`relative mx-auto min-h-screen max-w-md flex flex-col transition-colors duration-500 ${
          isNightMode
            ? 'bg-[#061629]/85 sm:border-x sm:border-sky-300/10'
            : 'bg-[#F4F9FD]/90 sm:border-x sm:border-[#0F4C81]/10'
        }`}
      >
        {/* Thanh tiêu đề trên cùng */}
        <header
          className={`sticky top-0 z-30 h-14 px-4 flex items-center justify-between backdrop-blur-md border-b transition-colors duration-300 ${
            isNightMode
              ? 'bg-[#061629]/85 border-sky-300/10 text-white'
              : 'bg-[#FFFDF9]/85 border-[#0F4C81]/10 text-[#0F4C81]'
          }`}
        >
          <h1 className="font-display text-base font-bold tracking-tight truncate">
            Hợp Lưu Ra Biển Lớn
          </h1>
          <span
            className={`text-xs font-semibold tabular-nums whitespace-nowrap shrink-0 ${
              isNightMode ? 'text-teal-300' : 'text-[#0D9488]'
            }`}
          >
            2026–2027
          </span>
        </header>

        {/* Nội dung chính */}
        <main className="flex-1 px-4 pt-4 pb-24">
          {activeTab === 'calendar' && <CalendarSheet />}
          {activeTab === 'blindbox' && <OceanBlindBox />}
          {activeTab === 'jar' && <TeacherJar />}
          {activeTab === 'chill' && <ChillStudyMode />}
        </main>

        {/* Thanh điều hướng cố định dưới đáy màn hình */}
        <nav
          aria-label="Điều hướng chính"
          className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md z-40 border-t backdrop-blur-md transition-colors duration-300 ${
            isNightMode
              ? 'bg-[#07192E]/92 border-sky-300/15'
              : 'bg-[#FFFDF9]/92 border-[#0F4C81]/12'
          }`}
        >
          <div className="grid grid-cols-4 h-16 px-1">
            {NAV_TABS.map(({ id, label, Icon }) => {
              const isActive = activeTab === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveTab(id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`min-h-[44px] flex flex-col items-center justify-center gap-1 rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] ${
                    isActive
                      ? isNightMode
                        ? 'text-teal-300 focus-visible:outline-teal-300'
                        : 'text-[#0F4C81] focus-visible:outline-[#0F4C81]'
                      : isNightMode
                      ? 'text-sky-200/60 hover:text-sky-100'
                      : 'text-slate-500 hover:text-[#0F4C81]'
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 transition-transform ${
                      isActive ? 'scale-110 stroke-[2.25]' : 'stroke-[1.75]'
                    }`}
                  />
                  <span className="text-[11px] font-semibold tracking-tight whitespace-nowrap shrink-0">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  );
}
