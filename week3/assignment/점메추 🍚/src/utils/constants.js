export const foodData = {
  country: {
    korean: [
      "닭갈비",
      "치킨",
      "냉면",
      "삼겹살",
      "곱창",
      "찜닭",
      "족발",
      "떡볶이",
    ],
    western: [
      "햄버거",
      "파스타",
      "피자",
      "돈가스",
      "스테이크",
      "샐러드",
      "샌드위치",
    ],
    asian: [
      "양꼬치",
      "마라탕",
      "라멘",
      "회",
      "연어덮밥",
      "쌀국수",
      "샤브샤브",
      "초밥",
    ],
  },
  taste: {
    fat: [
      "닭갈비",
      "치킨",
      "삼겹살",
      "곱창",
      "햄버거",
      "양꼬치",
      "마라탕",
      "파스타",
      "피자",
      "돈가스",
      "족발",
      "라멘",
      "스테이크",
    ],
    plain: [
      "냉면",
      "찜닭",
      "회",
      "쌀국수",
      "샐러드",
      "연어덮밥",
      "샌드위치",
      "샤브샤브",
      "초밥",
      "떡볶이",
    ],
  },
  amount: {
    largely: ["스테이크", "삼겹살", "양꼬치", "샤브샤브", "곱창", "회", "족발"],
    properly: [
      "마라탕",
      "라멘",
      "초밥",
      "돈가스",
      "닭갈비",
      "찜닭",
      "피자",
      "연어덮밥",
      "치킨",
      "냉면",
    ],
    simply: ["샐러드", "샌드위치", "햄버거", "파스타", "떡볶이", "쌀국수"],
  },
};

export const foodScore = {
  닭갈비: 0,
  치킨: 0,
  냉면: 0,
  삼겹살: 0,
  곱창: 0,
  찜닭: 0,
  족발: 0,
  떡볶이: 0,
  햄버거: 0,
  양꼬치: 0,
  마라탕: 0,
  라멘: 0,
  회: 0,
  연어덮밥: 0,
  쌀국수: 0,
  샤브샤브: 0,
  초밥: 0,
  돈가스: 0,
  스테이크: 0,
  샐러드: 0,
  샌드위치: 0,
  파스타: 0,
  피자: 0,
};

export const countryOptions = [
  { id: "korean", label: "한식" },
  { id: "western", label: "양식" },
  { id: "asian", label: "일/중식" },
];

export const amountOptions = [
  { id: "largely", label: "거하게" },
  { id: "properly", label: "적당하게" },
  { id: "simply", label: "간단하게" },
];

export const tasteOptions = [
  { id: "fat", label: "기름진 맛" },
  { id: "plain", label: "담백한 맛" },
];
