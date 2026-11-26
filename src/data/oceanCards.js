export const RARITY_CONFIG = {
  'Phổ thông': {
    label: 'Phổ thông',
    textColor: '#0F4C81',
    bgSoft: '#E0F2FE',
    borderColor: '#7DD3FC',
    weight: 40,
  },
  'Hiếm': {
    label: 'Hiếm',
    textColor: '#0D9488',
    bgSoft: '#CCFBF1',
    borderColor: '#5EEAD4',
    weight: 30,
  },
  'Sử thi': {
    label: 'Sử thi',
    textColor: '#C2410C',
    bgSoft: '#FFEDD5',
    borderColor: '#FDBA74',
    weight: 20,
  },
  'Huyền thoại': {
    label: 'Huyền thoại',
    textColor: '#B45309',
    bgSoft: '#FEF3C7',
    borderColor: '#FCD34D',
    weight: 10,
  },
};

export const OCEAN_CARDS = [
  {
    id: 'hai-dang-ly-son',
    name: 'Hải đăng Lý Sơn',
    location: 'Đảo Lớn · Quảng Ngãi',
    rarity: 'Phổ thông',
    gradient: 'linear-gradient(145deg, #0F4C81 0%, #1D70B8 55%, #38BDF8 100%)',
    svgType: 'lighthouse',
    facts: [
      'Cao hơn 45 mét trên đỉnh núi lửa cổ, ngọn hải đăng Lý Sơn chiếu sáng dẫn đường cho tàu cá ngư dân vươn khơi suốt hơn trăm năm qua.',
      'Từ trên tháp đèn nhìn xuống, bạn có thể thu trọn vào tầm mắt những ruộng tỏi xanh mướt bên bờ biển ngọc bích tuyệt đẹp.',
    ],
  },
  {
    id: 'chim-yen-cu-lao-cham',
    name: 'Chim yến Cù Lao Chàm',
    location: 'Cù Lao Chàm · Quảng Nam',
    rarity: 'Phổ thông',
    gradient: 'linear-gradient(145deg, #0E7490 0%, #0D9488 55%, #5EEAD4 100%)',
    svgType: 'swiftlet',
    facts: [
      'Những chú chim yến bé nhỏ có thể bay liên tục hàng trăm ki-lô-mét trên mặt biển, luôn nhớ đường quay về đúng vách đá nơi mình sinh ra.',
      'Cù Lao Chàm còn là Khu dự trữ sinh quyển thế giới nơi học sinh miền Trung thường được nhắc tới trong các dự án bảo vệ đại dương không túi ni-lông.',
    ],
  },
  {
    id: 'rua-xanh-con-dao',
    name: 'Rùa xanh Côn Đảo',
    location: 'Vườn quốc gia Côn Đảo · Bà Rịa - Vũng Tàu',
    rarity: 'Hiếm',
    gradient: 'linear-gradient(145deg, #065F46 0%, #0D9488 58%, #34D399 100%)',
    svgType: 'turtle',
    facts: [
      'Rùa mẹ vượt hàng ngàn hải lý nhưng luôn tìm về đúng bãi cát nơi nó từng nở ra để đẻ trứng — một bản năng định vị kỳ diệu của tự nhiên.',
      'Mỗi năm, hàng chục ngàn chú rùa con được các cô chú kiểm lâm và tình nguyện viên trẻ bảo vệ an toàn khi bò ra biển lớn lần đầu.',
    ],
  },
  {
    id: 'ca-heo-da-nang',
    name: 'Cá heo biển Đà Nẵng',
    location: 'Vịnh Đà Nẵng · Bán đảo Sơn Trà',
    rarity: 'Hiếm',
    gradient: 'linear-gradient(145deg, #0F4C81 0%, #0284C7 55%, #2DD4BF 100%)',
    svgType: 'dolphin',
    facts: [
      'Vùng biển xanh quanh bán đảo Sơn Trà đôi khi đón những đàn cá heo tung tăng bơi lội, dấu hiệu cho thấy hệ sinh thái biển quê hương đang rất khỏe mạnh.',
      'Cá heo sống theo bầy đàn cực kỳ đoàn kết: chúng luôn dìu đỡ đồng loại khi bị thương — giống như tinh thần tương trợ của bạn bè cùng lớp.',
    ],
  },
  {
    id: 'san-ho-hoang-sa',
    name: 'San hô đỏ Hoàng Sa',
    location: 'Quần đảo Hoàng Sa · Đà Nẵng',
    rarity: 'Sử thi',
    gradient: 'linear-gradient(145deg, #9A3412 0%, #EA580C 52%, #F97316 100%)',
    svgType: 'coral',
    facts: [
      'Quần đảo Hoàng Sa thuộc thành phố Đà Nẵng là ngôi nhà của những rạn san hô rực rỡ, nơi trú ngụ cho hàng trăm loài cá nhiệt đới quý hiếm.',
      'San hô lớn rất chậm, chỉ vài mi-li-mét mỗi năm, nhưng kết thành những "bức tường thành" tự nhiên che chở bờ biển trước bão tố.',
    ],
  },
  {
    id: 'cay-phong-ba',
    name: 'Cây phong ba đầu sóng',
    location: 'Quần đảo Trường Sa · Khánh Hòa',
    rarity: 'Sử thi',
    gradient: 'linear-gradient(145deg, #0F4C81 0%, #0D9488 50%, #F59E0B 100%)',
    svgType: 'tree',
    facts: [
      'Giữa nắng gió khắc nghiệt và hơi muối mặn chát ngoài đảo xa, cây phong ba vẫn bám rễ sâu vào san hô để vươn tán xanh che mát cho các chiến sĩ.',
      'Loài cây này được ví như biểu tượng của tuổi trẻ kiên cường: gió càng mạnh, thân cây càng dẻo dai và bền bỉ.',
    ],
  },
  {
    id: 'tau-khong-so',
    name: 'Tàu không số huyền thoại',
    location: 'Đường Hồ Chí Minh trên biển',
    rarity: 'Huyền thoại',
    gradient: 'linear-gradient(145deg, #1E293B 0%, #0F4C81 55%, #D97706 100%)',
    svgType: 'ship',
    facts: [
      'Những con tàu gỗ nhỏ bé không mang số hiệu cố định đã vượt sóng dữ Biển Đông, viết nên bản anh hùng ca trên tuyến đường Hồ Chí Minh trên biển.',
      'Thủy thủ Đoàn tàu Không số phải thuộc lòng từng dòng hải lưu, từng vì sao đêm để đưa hàng hóa cập bến an toàn giữa trùng khơi.',
    ],
  },
  {
    id: 'cot-moc-truong-sa',
    name: 'Cột mốc chủ quyền Trường Sa',
    location: 'Quần đảo Trường Sa · Việt Nam',
    rarity: 'Huyền thoại',
    gradient: 'linear-gradient(145deg, #7C2D12 0%, #0F4C81 52%, #F59E0B 100%)',
    svgType: 'landmark',
    facts: [
      'Đứng hiên ngang giữa bốn bề sóng vỗ, cột mốc chủ quyền là biểu tượng thiêng liêng khẳng định biển đảo quê hương Việt Nam ngàn đời.',
      'Mỗi lá thư, bức tranh của học sinh đất liền gửi ra Trường Sa đều được các chú bộ đội hải quân trân trọng treo trang trọng trong phòng sinh hoạt chung.',
    ],
  },
];
