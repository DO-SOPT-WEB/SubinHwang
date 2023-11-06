export const foodData = {
  닭갈비: {
    region: "korean",
    amount: "properly",
    taste: "fat",
    score: 0,
    image: "src/assets/img/chicken-ribs.png",
  },
  치킨: {
    region: "korean",
    amount: "properly",
    taste: "fat",
    score: 0,
    image: "src/assets/img/chicken.png",
  },
  냉면: {
    region: "korean",
    amount: "properly",
    taste: "plain",
    score: 0,
    image: "src/assets/img/cold-noodle.png",
  },
  삼겹살: {
    region: "korean",
    amount: "largely",
    taste: "fat",
    score: 0,
    image: "src/assets/img/pork-belly.png",
  },
  곱창: {
    region: "korean",
    amount: "largely",
    taste: "fat",
    score: 0,
    image: "src/assets/img/gopchang.png",
  },
  찜닭: {
    region: "korean",
    amount: "largely",
    taste: "plain",
    score: 0,
    image: "src/assets/img/jjimdak.png",
  },
  족발: {
    region: "korean",
    amount: "largely",
    taste: "fat",
    score: 0,
    image: "src/assets/img/pork-feet.png",
  },
  떡볶이: {
    region: "korean",
    amount: "simply",
    taste: "plain",
    score: 0,
    image: "src/assets/img/teokbokki.png",
  },
  양꼬치: {
    region: "asian",
    amount: "largely",
    taste: "fat",
    score: 0,
    image: "src/assets/img/lamb-skewers.png",
  },
  마라탕: {
    region: "asian",
    amount: "properly",
    taste: "fat",
    score: 0,
    image: "src/assets/img/maratang.png",
  },
  라멘: {
    region: "asian",
    amount: "properly",
    taste: "fat",
    score: 0,
    image: "src/assets/img/ramen.png",
  },
  회: {
    region: "asian",
    amount: "largely",
    taste: "plain",
    score: 0,
    image: "src/assets/img/raw-fish.png",
  },
  연어덮밥: {
    region: "asian",
    amount: "properly",
    taste: "plain",
    score: 0,
    image: "src/assets/img/salmon-rice-bowl.png",
  },
  쌀국수: {
    region: "asian",
    amount: "simply",
    taste: "plain",
    score: 0,
    image: "src/assets/img/rice-noodle.png",
  },
  샤브샤브: {
    region: "asian",
    amount: "largely",
    taste: "plain",
    score: 0,
    image: "src/assets/img/shabu.png",
  },
  초밥: {
    region: "asian",
    amount: "properly",
    taste: "plain",
    score: 0,
    image: "src/assets/img/raw-fish.png",
  },
  돈가스: {
    region: "western",
    amount: "properly",
    taste: "fat",
    score: 0,
    image: "src/assets/img/pork-cutlet.png",
  },
  스테이크: {
    region: "western",
    amount: "largely",
    taste: "fat",
    score: 0,
    image: "src/assets/img/steak.png",
  },
  샐러드: {
    region: "western",
    amount: "simply",
    taste: "plain",
    score: 0,
    image: "src/assets/img/salad.png",
  },
  샌드위치: {
    region: "western",
    amount: "simply",
    taste: "plain",
    score: 0,
    image: "src/assets/img/sandwich.png",
  },
  파스타: {
    region: "western",
    amount: "simply",
    taste: "plain",
    score: 0,
    image: "src/assets/img/pasta.png",
  },
  피자: {
    region: "western",
    amount: "properly",
    taste: "fat",
    score: 0,
    image: "src/assets/img/pizza.png",
  },
  햄버거: {
    region: "western",
    amount: "simply",
    taste: "fat",
    score: 0,
    image: "src/assets/img/hamburger.png",
  },
};

export const regionOptions = [
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

export const question = {
  region: {
    name: "region",
    question: "나는 지금 __ 이 땡긴다!",
  },
  amount: {
    name: "amount",
    question: "나는 지금 ___ 하게 먹고싶다!",
  },
  taste: {
    name: "taste",
    question: "나는 지금 __ 맛이 땡긴다!",
  },
};
export const RECOMMEND_BY = {
  TYPE: "취향대로 추천",
  RANDOM: "랜덤 추천",
};
