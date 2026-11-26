import { jdFromDate, parseDateStr } from '../utils/lunarHelper';

import amNhacCuocSongImg from '../assets/images/am-nhac-cuoc-song.jpg';
import bieuTuongHoNghinhImg from '../assets/images/bieu-tuong-ho-nghinh.jpg';
import bongRoCuoiTuanImg from '../assets/images/bong-ro-cuoi-tuan.jpg';
import bongRoNhaThiDauImg from '../assets/images/bong-ro-nha-thi-dau.jpg';
import bongRoTrungThucImg from '../assets/images/bong-ro-trung-thuc.jpg';
import cauLacBoCoVuaImg from '../assets/images/cau-lac-bo-co-vua.jpg';
import chaoCoSanTruongImg from '../assets/images/chao-co-san-truong.jpg';
import chaoNamHocMoiImg from '../assets/images/chao-nam-hoc-moi.jpg';
import coGiaoAoDaiXanhImg from '../assets/images/co-giao-ao-dai-xanh.jpg';
import coToQuocSanTruongImg from '../assets/images/co-to-quoc-san-truong.jpg';
import flycamMaiTruongDoImg from '../assets/images/flycam-mai-truong-do.jpg';
import gioHocBoiLoiImg from '../assets/images/gio-hoc-boi-loi.jpg';
import gioHocNangSangImg from '../assets/images/gio-hoc-nang-sang.jpg';
import gioRaChoiSanTruongImg from '../assets/images/gio-ra-choi-san-truong.jpg';
import gocHocTapChamChuImg from '../assets/images/goc-hoc-tap-cham-chu.jpg';
import hoatDongNgoaiKhoaImg from '../assets/images/hoat-dong-ngoai-khoa.jpg';
import khaiGiangSanTruongImg from '../assets/images/khai-giang-san-truong.jpg';
import leChaoCoToanTruongImg from '../assets/images/le-chao-co-toan-truong.jpg';
import lopHocThaTimImg from '../assets/images/lop-hoc-tha-tim.jpg';
import nhaGiaoImg from '../assets/images/nha-giao-20-11.jpg';
import nuCuoiHocTroImg from '../assets/images/nu-cuoi-hoc-tro.jpg';
import phongMayTinHocImg from '../assets/images/phong-may-tin-hoc.jpg';
import renLuyenBoiLoiImg from '../assets/images/ren-luyen-boi-loi.jpg';
import sanTruongTuTrenCaoImg from '../assets/images/san-truong-tu-tren-cao.jpg';
import thuVienDocSachImg from '../assets/images/thu-vien-doc-sach.jpg';
import tiengDanViolinImg from '../assets/images/tieng-dan-violin.jpg';
import tietAmNhacTapTheImg from '../assets/images/tiet-am-nhac-tap-the.jpg';
import toanCanhTruongHoNghinhImg from '../assets/images/toan-canh-truong-ho-nghinh.jpg';
import tuongDaiHoNghinhImg from '../assets/images/tuong-dai-ho-nghinh.jpg';

export const FEATURED_DAYS = {
  '2026-09-05': {
    date: '2026-09-05',
    badge: 'Ngày Khai Giảng Hợp Lưu',
    photo: leChaoCoToanTruongImg,
    photoCaption: 'Lễ khai giảng và chào cờ trang nghiêm dưới mái trường chung',
    oceanSignal:
      'Sáng nay gió biển Đông thổi căng buồm rồi đó thuyền viên ơi! Hai dòng sông Hồ Nghinh và Lý Thường Kiệt chính thức hợp lưu ra biển lớn — chuẩn bị tinh thần "slay" trọn năm học 2026–2027 nào.',
    confluenceStory:
      'Sân trường sáng 5/9 bỗng rộng vui gấp đôi: bạn cũ Lý Thường Kiệt bắt tay bạn mới Hồ Nghinh, chung một màu áo trắng và chung nhịp trống khai trường vang tới tận sóng biển Đà Nẵng.',
  },
  '2026-11-17': {
    date: '2026-11-17',
    badge: 'Sóng Tri Ân',
    photo: gioHocNangSangImg,
    photoCaption: 'Giờ học đầy tập trung trong lớp học ngập nắng sáng',
    oceanSignal:
      'Tín hiệu từ ngọn hải đăng Sơn Trà: Mấy bữa nay kiểm tra giữa kỳ hơi căng đúng không? Hít một hơi thật sâu vị gió biển, nạp lại "pin mặt trời" rồi từ từ gỡ từng bài nhé!',
    confluenceStory:
      'Góc hành lang tầng 2 giờ ra chơi: hội mê Toán Hồ Nghinh và team Văn Lý Thường Kiệt lập "liên minh giải cứu bài tập", chỉ nhau bí kíp học nhanh mà vẫn kịp đá cầu 10 phút.',
  },
  '2026-11-18': {
    date: '2026-11-18',
    badge: 'Nhịp Hải Lưu',
    photo: amNhacCuocSongImg,
    photoCaption: 'Ban nhạc học sinh tỏa sáng trong tiết Âm nhạc & Cuộc sống',
    oceanSignal:
      'Cá heo vừa báo tin: Hôm nay là ngày siêu hợp để hoàn thành một việc nhỏ bạn cứ hẹn mãi "để mai làm". Chỉ cần mở vở 25 phút là đã vượt qua 80% sự lười biếng rồi!',
    confluenceStory:
      'Bí mật nhỏ ở căn-tin trường hợp lưu: món bánh mì ốp-la buổi sáng vẫn ngon y như cũ, chỉ khác là giờ có thêm tiếng cười rôm rả của cả hai bên sân trường nhập lại.',
  },
  '2026-11-19': {
    date: '2026-11-19',
    badge: 'Hải Trình Hôm Nay',
    photo: lopHocThaTimImg,
    photoCaption: 'Thả tim rạng rỡ tiếp thêm năng lượng tích cực mỗi ngày đến lớp',
    oceanSignal:
      'Biển hôm nay êm như mặt gương, cực kỳ hợp để chốt sổ bài tập trước thềm 20/11. Đừng so sánh tốc độ bơi của mình với ai cả — mỗi chú rùa biển đều có hải trình riêng để về đích!',
    confluenceStory:
      'Chiều nay các lớp đang rục rịch vẽ báo tường "Hợp Lưu Ra Biển Lớn". Bạn vẽ sóng Hoàng Sa, bạn nắn nót từng dòng tri ân thầy cô — nhìn lộn xộn mà thương muốn xỉu.',
  },
  '2026-11-20': {
    date: '2026-11-20',
    badge: 'Ngày Nhà Giáo Việt Nam 20/11',
    photo: nhaGiaoImg,
    photoCaption: 'Tri ân những người lái đò thầm lặng bên bục giảng thân thương',
    oceanSignal:
      'Tín hiệu đặc biệt nhất tháng 11: Hôm nay thầy cô chính là những người giữ hải đăng thầm lặng. Một lời cảm ơn chân thành hay nụ cười ngoan trên lớp đủ làm thầy cô vui nguyên cả tuần!',
    confluenceStory:
      'Ngày 20/11 đầu tiên dưới mái trường chung Hồ Nghinh x Lý Thường Kiệt: thầy cô hai trường cùng đứng chung một sân khấu, nhận hoa từ hàng trăm học trò vừa lạ mà vừa thân như người một nhà.',
  },
  '2026-11-21': {
    date: '2026-11-21',
    badge: 'Gió Mùa Đông Bắc Nhẹ',
    photo: bongRoCuoiTuanImg,
    photoCaption: 'Nhiệt huyết sân bóng rổ cuối tuần của tuổi trẻ học đường',
    oceanSignal:
      'Sáng thứ Bảy trời Đà Nẵng se se lạnh, sóng Mỹ Khê vỗ rì rào nghe cực chill. Học xong buổi sáng nhớ cho mắt nghỉ ngơi, rời màn hình 30 phút để ngắm mây trời nhé!',
    confluenceStory:
      'CLB Đọc sách cuối tuần phát hiện một điểm chung siêu thú vị: học sinh Hồ Nghinh và Lý Thường Kiệt đều mê truyện phiêu lưu biển đảo và cực giỏi giải đố nhanh.',
  },
  '2026-11-22': {
    date: '2026-11-22',
    badge: 'Chủ Nhật Nạp Năng Lượng',
    photo: flycamMaiTruongDoImg,
    photoCaption: 'Toàn cảnh mái trường thân yêu nhìn từ bầu trời Đà Nẵng',
    oceanSignal:
      'Thông điệp từ rạn san hô: Chủ Nhật là ngày để tái tạo năng lượng, không phải để "cày" xuyên trưa bỏ bữa. Ăn ngon, ngủ đủ, soạn sẵn cặp sách tối nay là thứ Hai auto mượt!',
    confluenceStory:
      'Chiều Chủ Nhật dạo biển nghe tiếng sóng, tự nhiên thấy năm học mới trôi nhanh thật: từ bỡ ngỡ ngày đầu sáp nhập, giờ đã có thêm bao nhiêu bạn thân cùng chung một màu cờ lớp.',
  },
  '2026-11-23': {
    date: '2026-11-23',
    badge: 'Thứ Hai Đầu Tuần',
    photo: chaoCoSanTruongImg,
    photoCaption: 'Nghi lễ chào cờ đầu tuần trang nghiêm dưới sân trường',
    oceanSignal:
      'Gió biển đầu tuần thổi căng buồm rồi đó! Khởi động thứ Hai bằng một nụ cười tươi và danh sách 3 việc nhỏ cần hoàn thành trong ngày nhé.',
    confluenceStory:
      'Sáng thứ Hai dưới sân trường rợp bóng cây, cả hai khối Hồ Nghinh & Lý Thường Kiệt cùng hát vang Quốc ca tạo nên nguồn năng lượng tự hào khó quên.',
  },
  '2026-11-24': {
    date: '2026-11-24',
    badge: 'Khám Phá Tri Thức',
    photo: phongMayTinHocImg,
    photoCaption: 'Giờ thực hành Tin học sôi nổi bên khung cửa sổ ngập nắng',
    oceanSignal:
      'Tín hiệu từ trạm radar biển Đông: Tò mò và chịu khó đặt câu hỏi chính là chiếc la bàn xịn nhất đưa bạn khám phá thế giới số và đại dương bao la.',
    confluenceStory:
      'Trong phòng Tin học, các bạn chia nhóm đôi làm bài thuyết trình về bản đồ Hoàng Sa – Trường Sa, vừa học gõ phím nhanh vừa thuộc lòng tên từng hòn đảo quê hương.',
  },
  '2026-11-25': {
    date: '2026-11-25',
    badge: 'Nhịp Đọc Thư Viện',
    photo: thuVienDocSachImg,
    photoCaption: 'Khoảnh khắc bình yên đọc sách giữa giờ tại thư viện trường',
    oceanSignal:
      'Hôm nay hãy dành 15 phút cho một trang sách hay hoặc ngắm một góc trời yên bình. Tâm trí tĩnh lặng như mặt biển lúc bình minh sẽ giúp bạn nhớ bài lâu gấp đôi!',
    confluenceStory:
      'Góc thư viện xanh mướt là điểm hẹn quen thuộc mỗi trưa của hội mọt sách hai trường: người tìm truyện khoa học, người đọc ký sự biển đảo Việt Nam.',
  },
  '2026-11-26': {
    date: '2026-11-26',
    badge: 'Giai Điệu Thanh Xuân',
    photo: tiengDanViolinImg,
    photoCaption: 'Giai điệu violin ngọt ngào trong phòng Âm nhạc',
    oceanSignal:
      'Mỗi con sóng có một cao độ riêng, cũng như mỗi bạn đều có một tài lẻ đặc biệt. Đừng ngại thử sức ở câu lạc bộ mới trong năm học hợp lưu này nha!',
    confluenceStory:
      'Tiếng đàn violin vang lên từ tầng 2 khiến cả hành lang bỗng dịu lại — âm nhạc luôn là cầu nối nhanh nhất giúp bạn bè mới làm quen với nhau.',
  },
  '2026-11-27': {
    date: '2026-11-27',
    badge: 'Sức Trẻ Vươn Khơi',
    photo: renLuyenBoiLoiImg,
    photoCaption: 'Rèn luyện kỹ năng bơi lội an toàn trong làn nước xanh mát',
    oceanSignal:
      'Sống ở thành phố biển Đà Nẵng, biết bơi giỏi và giữ thể lực tốt chính là hành trang vàng để tự tin vươn ra biển lớn cùng bạn bè.',
    confluenceStory:
      'Hồ bơi trường lúc nào cũng rộn ràng tiếng cổ vũ: bạn bơi tốt hướng dẫn bạn mới tập thở dưới nước, chẳng mấy chốc ai cũng lướt êm như cá heo.',
  },
  '2026-11-28': {
    date: '2026-11-28',
    badge: 'Bản Lĩnh Sân Đấu',
    photo: bongRoTrungThucImg,
    photoCaption: 'Tinh thần thể thao "Trung thực - Cao thượng" trên sân bóng rổ',
    oceanSignal:
      'Cuối tuần rồi! Dù thắng hay thua một ván đấu, giữ tinh thần chơi đẹp và hết mình vì đồng đội mới là chiến thắng lớn nhất.',
    confluenceStory:
      'Đội bóng rổ hợp lưu mới lập mà phối hợp ăn ý như đã tập chung từ lâu — cú ném rổ chuẩn xác nào cũng nhận được tràng pháo tay vang dội cả nhà thi đấu.',
  },
  '2026-11-29': {
    date: '2026-11-29',
    badge: 'Đấu Trí Thư Giãn',
    photo: cauLacBoCoVuaImg,
    photoCaption: 'Những nước cờ tập trung cao độ tại Câu lạc bộ Cờ vua',
    oceanSignal:
      'Chủ Nhật nhẹ nhàng luyện tư duy bằng một ván cờ hoặc sắp xếp lại góc học tập gọn gàng để đón tuần mới thật hứng khởi nhé!',
    confluenceStory:
      'Bàn cờ vua ở góc thư viện là nơi "kết giao" siêu nhanh của các cao thủ nhí hai trường: đánh xong một ván là thành bạn thân rủ nhau đi ăn vặt liền.',
  },
};

const FALLBACK_PHOTOS = [
  {
    photo: toanCanhTruongHoNghinhImg,
    photoCaption: 'Ngôi trường khang trang rạng ngời dưới bầu trời Đà Nẵng',
  },
  {
    photo: tuongDaiHoNghinhImg,
    photoCaption: 'Tượng đài Nhà cách mạng Hồ Nghinh uy nghiêm giữa sân trường',
  },
  {
    photo: chaoNamHocMoiImg,
    photoCaption: 'Cô giáo tươi cười chào đón học sinh bên bảng xanh rực rỡ',
  },
  {
    photo: coGiaoAoDaiXanhImg,
    photoCaption: 'Áo dài xanh dịu dàng đồng hành cùng từng trang vở học trò',
  },
  {
    photo: gioRaChoiSanTruongImg,
    photoCaption: 'Bước chạy rộn ràng giờ ra chơi đầy nắng và tiếng cười',
  },
  {
    photo: nuCuoiHocTroImg,
    photoCaption: 'Nụ cười rạng rỡ tuổi học trò trong màu khăn quàng đỏ thắm',
  },
  {
    photo: gocHocTapChamChuImg,
    photoCaption: 'Ánh mắt tập trung bên trang giấy trắng mỗi giờ lên lớp',
  },
  {
    photo: phongMayTinHocImg,
    photoCaption: 'Giờ Tin học hiện đại khám phá tri thức số',
  },
  {
    photo: thuVienDocSachImg,
    photoCaption: 'Không gian đọc sách yên bình nuôi dưỡng ước mơ xanh',
  },
  {
    photo: cauLacBoCoVuaImg,
    photoCaption: 'Rèn luyện bản lĩnh và tư duy cùng bạn bè bên bàn cờ vua',
  },
  {
    photo: tiengDanViolinImg,
    photoCaption: 'Giai điệu violin ngân vang nuôi dưỡng tâm hồn nghệ thuật',
  },
  {
    photo: tietAmNhacTapTheImg,
    photoCaption: 'Lớp học Âm nhạc & Cuộc sống ấm áp tình thầy trò',
  },
  {
    photo: gioHocBoiLoiImg,
    photoCaption: 'Thầy hướng dẫn tận tình kỹ thuật khởi động bên hồ bơi',
  },
  {
    photo: renLuyenBoiLoiImg,
    photoCaption: 'Tự tin rèn luyện bơi lội trong làn nước trong xanh',
  },
  {
    photo: bongRoNhaThiDauImg,
    photoCaption: 'Nhiệt huyết tuổi trẻ trong từng pha tranh bóng đẹp mắt',
  },
  {
    photo: bongRoTrungThucImg,
    photoCaption: 'Đoàn kết, trung thực và cao thượng trên sân thể thao',
  },
  {
    photo: hoatDongNgoaiKhoaImg,
    photoCaption: 'Hoạt động ngoại khóa sáng tạo qua từng bức tranh vẽ tay',
  },
  {
    photo: coToQuocSanTruongImg,
    photoCaption: 'Cờ Tổ quốc tung bay trên sân trường rợp bóng cây xanh',
  },
  {
    photo: sanTruongTuTrenCaoImg,
    photoCaption: 'Sân trường xanh mát nhìn từ trên cao vào giờ sinh hoạt chung',
  },
  {
    photo: flycamMaiTruongDoImg,
    photoCaption: 'Mái ngói đỏ thân thương giữa lòng thành phố biển Đà Nẵng',
  },
  {
    photo: bieuTuongHoNghinhImg,
    photoCaption: 'Ngọn lửa tri thức và khát vọng vươn xa ra biển lớn',
  },
  {
    photo: khaiGiangSanTruongImg,
    photoCaption: 'Sân trường rộn tiếng cười của tập thể học sinh thân thương',
  },
  {
    photo: lopHocThaTimImg,
    photoCaption: 'Thả tim rạng rỡ lan tỏa tinh thần lạc quan mỗi ngày',
  },
  {
    photo: amNhacCuocSongImg,
    photoCaption: 'Khoảnh khắc âm nhạc rộn ràng sau giờ học căng thẳng',
  },
  {
    photo: gioHocNangSangImg,
    photoCaption: 'Khung cửa sổ đầy nắng và những trang vở chăm ngoan',
  },
  {
    photo: bongRoCuoiTuanImg,
    photoCaption: 'Vận động hết mình trên sân thể thao cùng đồng đội',
  },
  {
    photo: chaoCoSanTruongImg,
    photoCaption: 'Nét đẹp truyền thống dưới sân trường rợp bóng cây xanh',
  },
  {
    photo: nhaGiaoImg,
    photoCaption: 'Cô trò cùng nhau vun đắp từng giờ học ý nghĩa',
  },
  {
    photo: leChaoCoToanTruongImg,
    photoCaption: 'Nghi lễ chào cờ trang nghiêm gắn kết đại gia đình học đường',
  },
];

const FALLBACK_SIGNALS = [
  'Sóng biển không bao giờ đi đường thẳng mà vẫn chạm tới bờ. Hôm nay lỡ giải sai một câu Toán cũng đừng nản nha, coi như một lần chỉnh la bàn!',
  'Tín hiệu từ đảo Lý Sơn: Cây tỏi vẫn lớn lên trên cát trắng gió mặn, còn bạn thì đang mạnh mẽ hơn mỗi ngày nhờ từng giờ học nghiêm túc.',
  'Gió biển hôm nay thổi theo hướng tích cực: thử mỉm cười với người bạn ngồi bàn bên xem, biết đâu lại nhận được một cái gật đầu tiếp sức siêu ấm áp!',
  'Đàn cá nhỏ đi cùng nhau sẽ chẳng ngại đại dương rộng. Ở mái trường hợp lưu Hồ Nghinh x Lý Thường Kiệt, bạn luôn có thầy cô và bạn bè đồng hành.',
  'Nhắc nhẹ từ chú Rùa xanh Côn Đảo: Uống đủ nước lọc thay vì uống trà sữa quá trễ tối nay nhé, giữ phong độ đỉnh cao cho tiết học ngày mai!',
  'Ngoài khơi Trường Sa trời xanh lắm! Giữ tâm trạng tươi như nắng sớm Đà Nẵng để giải quyết gọn ghẽ mọi bài kiểm tra tuần này nào.',
  'Mỗi trang vở ghi chép cẩn thận hôm nay chính là một viên gạch xây nên ngọn hải đăng tương lai của riêng bạn. Tiến lên thuyền viên!',
];

const FALLBACK_STORIES = [
  'Bật mí: Từ ngày hai trường về chung một nhà, góc sân có cây bàng xanh bỗng trở thành "tọa độ quốc dân" để các bạn trao đổi vở ghi và kể chuyện vui giờ ra chơi.',
  'Hội học sinh hai trường từng tranh luận xem bên nào đi học sớm hơn — kết quả hòa 1-1 vì cả hai đều thích đến sớm ngắm nắng sáng rọi qua hàng lang lớp học.',
  'Thầy Giám thị bảo điều đáng yêu nhất năm học 2026–2027 là nghe học sinh gọi nhau "bạn trường mình ơi" thân thương như đã học chung từ lớp 1.',
  'Mỗi chiều tan trường, hai dòng xe đạp nối đuôi nhau ra cổng tạo thành một bức tranh thanh xuân rộn ràng bậc nhất khu phố Đà Nẵng.',
  'Trong thư viện trường có một kệ sách riêng về biển đảo quê hương, lúc nào cũng có vài bạn ngồi đọc say sưa đến sát giờ trống vào lớp.',
  'Bí kíp gắn kết cực nhanh của các lớp hợp lưu: chia nhóm trực nhật xen kẽ, làm xong sớm cả nhóm kéo nhau xuống sân đá cầu cười vang cả góc trời.',
];

export function getCalendarDayData(dateStr) {
  if (FEATURED_DAYS[dateStr]) {
    return {
      ...FEATURED_DAYS[dateStr],
      isFeatured: true,
    };
  }
  const { year, month, day } = parseDateStr(dateStr);
  const seed = jdFromDate(day, month, year);
  const fallbackVisual = FALLBACK_PHOTOS[seed % FALLBACK_PHOTOS.length];
  return {
    date: dateStr,
    badge: 'Nhật Ký Hải Trình',
    photo: fallbackVisual.photo,
    photoCaption: fallbackVisual.photoCaption,
    oceanSignal: FALLBACK_SIGNALS[seed % FALLBACK_SIGNALS.length],
    confluenceStory: FALLBACK_STORIES[(seed * 3) % FALLBACK_STORIES.length],
    isFeatured: false,
  };
}
