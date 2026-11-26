const PI = Math.PI;

const CAN = ['Giáp', 'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ', 'Canh', 'Tân', 'Nhâm', 'Quý'];
const CHI = ['Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ', 'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'];
const WEEKDAYS_VN = [
  'Chủ Nhật',
  'Thứ Hai',
  'Thứ Ba',
  'Thứ Tư',
  'Thứ Năm',
  'Thứ Sáu',
  'Thứ Bảy',
];

function INT(d) {
  return Math.floor(d);
}

/**
 * Chuyển đổi ngày Dương lịch sang Số ngày Julius (Julian Day Number)
 */
export function jdFromDate(dd, mm, yy) {
  const a = INT((14 - mm) / 12);
  const y = yy + 4800 - a;
  const m = mm + 12 * a - 3;
  let jd =
    dd +
    INT((153 * m + 2) / 5) +
    365 * y +
    INT(y / 4) -
    INT(y / 100) +
    INT(y / 400) -
    32045;
  if (jd < 2299161) {
    jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083;
  }
  return jd;
}

/**
 * Tính thời điểm Sóc (New Moon) thứ k theo thuật toán thiên văn Jean Meeus
 */
function NewMoon(k) {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const dr = PI / 180;
  let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
  Jd1 = Jd1 + 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);
  const M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
  const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
  const F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
  let C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
  C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
  C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
  C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
  C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
  C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
  C1 = C1 + 0.0010 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));
  let deltat;
  if (T < -11) {
    deltat = 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3;
  } else {
    deltat = -0.000278 + 0.000265 * T + 0.000262 * T2;
  }
  return Jd1 + C1 - deltat;
}

/**
 * Tính kinh độ Mặt Trời tại thời điểm Julius jdn
 */
function SunLongitude(jdn) {
  const T = (jdn - 2451545.0) / 36525;
  const T2 = T * T;
  const dr = PI / 180;
  const M = 357.52910 + 35999.05030 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
  const L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
  let DL = (1.914600 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
  DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.000290 * Math.sin(dr * 3 * M);
  let L = L0 + DL;
  L = L * dr;
  L = L - PI * 2 * INT(L / (PI * 2));
  return L;
}

function getSunLongitude(dayNumber, timeZone) {
  return INT((SunLongitude(dayNumber - 0.5 - timeZone / 24) / PI) * 6);
}

function getNewMoonDay(k, timeZone) {
  return INT(NewMoon(k) + 0.5 + timeZone / 24);
}

function getLunarMonth11(yy, timeZone) {
  const off = jdFromDate(31, 12, yy) - 2415021;
  const k = INT(off / 29.530588853);
  let nm = getNewMoonDay(k, timeZone);
  const sunLong = getSunLongitude(nm, timeZone);
  if (sunLong >= 9) {
    nm = getNewMoonDay(k - 1, timeZone);
  }
  return nm;
}

function getLeapMonthOffset(a11, timeZone) {
  const k = INT((a11 - 2415021.076998695) / 29.530588853 + 0.5);
  let last = 0;
  let i = 1;
  let arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
  do {
    last = arc;
    i += 1;
    arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
  } while (arc !== last && i < 14);
  return i - 1;
}

/**
 * Chuyển đổi Dương lịch sang Âm lịch Việt Nam (múi giờ UTC+7)
 */
export function convertSolar2Lunar(dd, mm, yy, timeZone = 7) {
  const dayNumber = jdFromDate(dd, mm, yy);
  const k = INT((dayNumber - 2415021.076998695) / 29.530588853);
  let monthStart = getNewMoonDay(k + 1, timeZone);
  if (monthStart > dayNumber) {
    monthStart = getNewMoonDay(k, timeZone);
  }
  let a11 = getLunarMonth11(yy, timeZone);
  let b11 = a11;
  let lunarYear;
  if (a11 >= monthStart) {
    lunarYear = yy;
    a11 = getLunarMonth11(yy - 1, timeZone);
  } else {
    lunarYear = yy + 1;
    b11 = getLunarMonth11(yy + 1, timeZone);
  }
  const lunarDay = dayNumber - monthStart + 1;
  const diff = INT((monthStart - a11) / 29);
  let lunarLeap = 0;
  let lunarMonth = diff + 11;
  if (b11 - a11 > 365) {
    const leapMonthDiff = getLeapMonthOffset(a11, timeZone);
    if (diff >= leapMonthDiff) {
      lunarMonth = diff + 10;
      if (diff === leapMonthDiff) {
        lunarLeap = 1;
      }
    }
  }
  if (lunarMonth > 12) {
    lunarMonth = lunarMonth - 12;
  }
  if (lunarMonth >= 11 && diff < 4) {
    lunarYear -= 1;
  }
  return {
    day: lunarDay,
    month: lunarMonth,
    year: lunarYear,
    isLeap: lunarLeap === 1,
    jd: dayNumber,
  };
}

export function getCanChiYear(lunarYear) {
  return `${CAN[(lunarYear + 6) % 10]} ${CHI[(lunarYear + 8) % 12]}`;
}

export function getCanChiMonth(lunarMonth, lunarYear) {
  return `${CAN[(lunarYear * 12 + lunarMonth + 3) % 10]} ${CHI[(lunarMonth + 1) % 12]}`;
}

export function getCanChiDay(jd) {
  return `${CAN[(jd + 9) % 10]} ${CHI[(jd + 1) % 12]}`;
}

/**
 * Lấy chuỗi ngày YYYY-MM-DD hiện tại theo múi giờ Việt Nam (Asia/Ho_Chi_Minh, UTC+7)
 */
export function getVietnamTodayStr() {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Asia/Ho_Chi_Minh',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
  return formatter.format(new Date());
}

/**
 * Phân tích chuỗi YYYY-MM-DD thành { year, month, day } thuần túy không qua UTC
 */
export function parseDateStr(dateStr) {
  const [y, m, d] = dateStr.split('-').map(Number);
  return { year: y, month: m, day: d };
}

export function formatDateStr(year, month, day) {
  const yy = String(year).padStart(4, '0');
  const mm = String(month).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${yy}-${mm}-${dd}`;
}

/**
 * Cộng/trừ ngày an toàn bằng số Julius (không bị lệch múi giờ)
 */
export function shiftDateStr(dateStr, deltaDays) {
  const { year, month, day } = parseDateStr(dateStr);
  const jd = jdFromDate(day, month, year) + deltaDays;
  let l = jd + 68569;
  const n = INT((4 * l) / 146097);
  l = l - INT((146097 * n + 3) / 4);
  const i = INT((4000 * (l + 1)) / 1461001);
  l = l - INT((1461 * i) / 4) + 31;
  const j = INT((80 * l) / 2447);
  const d = l - INT((2447 * j) / 80);
  l = INT(j / 11);
  const m = j + 2 - 12 * l;
  const y = 100 * (n - 49) + i + l;
  return formatDateStr(y, m, d);
}

/**
 * Lấy thứ trong tuần tiếng Việt từ chuỗi YYYY-MM-DD
 */
export function getDayOfWeekVN(dateStr) {
  const { year, month, day } = parseDateStr(dateStr);
  const jd = jdFromDate(day, month, year);
  const dayIndex = (jd + 1) % 7;
  return WEEKDAYS_VN[dayIndex];
}

/**
 * Tính khoảng cách ngày (b - a) dựa trên Julius Day (chuẩn ngày Việt Nam)
 */
export function diffDaysVN(fromDateStr, toDateStr) {
  const a = parseDateStr(fromDateStr);
  const b = parseDateStr(toDateStr);
  return jdFromDate(b.day, b.month, b.year) - jdFromDate(a.day, a.month, a.year);
}

/**
 * Trả về thông tin Âm lịch đầy đủ cho chuỗi ngày YYYY-MM-DD
 */
export function getLunarDetails(dateStr) {
  const { year, month, day } = parseDateStr(dateStr);
  const lunar = convertSolar2Lunar(day, month, year, 7);
  const canChiYear = getCanChiYear(lunar.year);
  const canChiMonth = getCanChiMonth(lunar.month, lunar.year);
  const canChiDay = getCanChiDay(lunar.jd);

  const monthLabel = lunar.isLeap ? `${lunar.month} (Nhuận)` : `${lunar.month}`;
  const dayText = lunar.day <= 10 ? `Mùng ${lunar.day}` : `${lunar.day}`;

  return {
    ...lunar,
    canChiYear,
    canChiMonth,
    canChiDay,
    formattedShort: `${dayText} tháng ${monthLabel} · ${canChiYear}`,
    formattedFull: `Ngày ${dayText} tháng ${monthLabel} năm ${canChiYear}`,
  };
}

/**
 * Danh sách cột mốc lớn trong năm học 2026–2027 (theo ngày Việt Nam)
 */
export const SCHOOL_MILESTONES = [
  { date: '2026-09-05', title: 'Lễ Khai Giảng Hợp Lưu 2026–2027' },
  { date: '2026-10-20', title: 'Ngày Phụ nữ Việt Nam 20/10' },
  { date: '2026-11-20', title: 'Ngày Nhà giáo Việt Nam 20/11' },
  { date: '2026-12-22', title: 'Kỷ niệm Ngày thành lập QĐND Việt Nam' },
  { date: '2027-01-15', title: 'Sơ kết Học kỳ I' },
  { date: '2027-02-06', title: 'Mùng 1 Tết Nguyên Đán Đinh Mùi' },
  { date: '2027-03-26', title: 'Ngày thành lập Đoàn TNCS Hồ Chí Minh' },
  { date: '2027-04-30', title: 'Kỷ niệm Thống nhất đất nước 30/4' },
  { date: '2027-05-25', title: 'Lễ Tổng kết Niên học 2026–2027' },
];

export function getNextSchoolMilestone(fromDateStr) {
  for (const milestone of SCHOOL_MILESTONES) {
    const daysLeft = diffDaysVN(fromDateStr, milestone.date);
    if (daysLeft >= 0) {
      return {
        ...milestone,
        daysLeft,
      };
    }
  }
  return {
    date: '2027-09-05',
    title: 'Khai giảng Niên học tiếp theo',
    daysLeft: diffDaysVN(fromDateStr, '2027-09-05'),
  };
}
