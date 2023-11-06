import mainCharacter from "./assets/img/character.png";
import "./App.css";
import { Header, Section } from "./styles/globalStyle";
import { styled } from "styled-components";
import { useState } from "react";

const Title = styled.h1`
  font-size: 1.8rem;
`;
const Quetion = styled.h2`
  font-size: 2.5rem;
  font-weight: 100;
`;
const Character = styled.img`
  width: 150px;
`;

const RadioBalloon = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 20px;
  width: 200px;
  height: 150px;

  margin: 20px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
  &:checked {
    background: red;
  }
`;

const Balloon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 20px;
  width: 200px;
  height: 150px;

  margin: 20px;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
  }

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;
const RadioInput = styled.input`
  display: none;

  &:checked + label {
    background: #13868d;
  }
  &:checked + label > p {
    color: #fff;
  }
  &:checked + label::before {
    border-color: #13868d transparent transparent transparent;
    color: #fff;
  }
`;
const BalloonText = styled.p`
  color: #000;
  font-size: 1.5rem;
`;
const Answer = styled.div`
  display: flex;
  justify-content: center;

  padding: 40px 0 0;
`;

const WhiteBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  padding: 10px;
  border-radius: 20px;
  width: 200px;
  height: 150px;
  margin: 20px;
`;
const ButtonSection = styled.div`
  position: relative;
  bottom: 50px;
  display: flex;
  justify-content: space-between;
  width: 750px;
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 20px;
  background: #13868d;
  color: #fff;
`;
const DisabledNextButton = styled(Button)`
  opacity: 50%;
`;
const ActiveNextButton = styled(Button)`
  &:hover {
    box-shadow: 0 0 8px 4px #13868d;
  }
`;
const PrevButton = styled(Button)`
  background: #dadada;
  color: #333;
  &:hover {
    box-shadow: 0 0 8px 4px #dadada;
  }
`;

function App() {
  const RECOMMEND_BY = {
    TYPE: "취향대로 추천",
    RANDOM: "랜덤 추천",
  };
  const [page, setPage] = useState(0);
  const goTypeResultPage = (type) => {
    setAnswer(type);
    setPage(page + 1);
  };
  const nextPage = () => {
    setPage(page + 1);
    setSelected(false);
  };
  const prevPage = () => {
    setPage(page - 1);
    setSelected(true);
  };

  const foodData = {
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
      largely: [
        "스테이크",
        "삼겹살",
        "양꼬치",
        "샤브샤브",
        "곱창",
        "회",
        "족발",
      ],
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
  const foodScore = {
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

  const [answer, setAnswer] = useState("");
  const [isSelected, setSelected] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedTaste, setSelectedTaste] = useState("");
  const [result, setResult] = useState("");

  const recommendFood = () => {
    if (selectedCountry && selectedAmount && selectedCountry) {
      const amountOptions = foodData.amount[selectedAmount];
      const countryOptions = foodData.country[selectedCountry];
      const tasteOptions = foodData.taste[selectedTaste];
      console.log(selectedCountry);

      amountOptions.map((food) => {
        foodScore[food] += 1;
      });
      countryOptions.map((food) => {
        foodScore[food] += 1;
      });
      tasteOptions.map((food) => {
        foodScore[food] += 1;
      });
      console.log(foodScore);
      findMostSuitableFood();
      nextPage();
    }
  };
  const findMostSuitableFood = () => {
    let mostSuitableFoods = [];
    let maxCount = -1;

    for (const label in foodScore) {
      if (foodScore[label] > maxCount) {
        mostSuitableFoods = [label];
        maxCount = foodScore[label];
      } else if (foodScore[label] === maxCount) {
        mostSuitableFoods.push(label);
      }
    }

    const randomIndex = Math.floor(Math.random() * mostSuitableFoods.length);
    setResult(mostSuitableFoods[randomIndex]);
  };
  const countryOptions = [
    { id: "korean", label: "한식" },
    { id: "western", label: "양식" },
    { id: "asian", label: "일/중식" },
  ];
  const amountOptions = [
    { id: "largely", label: "거하게" },
    { id: "properly", label: "적당하게" },
    { id: "simply", label: "간단하게" },
  ];
  const tasteOptions = [
    { id: "fat", label: "기름진 맛" },
    { id: "plain", label: "담백한 맛" },
  ];

  const handleNextButton = (value, questionNumber) => {
    console.log(value);
    !isSelected && setSelected(!isSelected);
    switch (questionNumber) {
      case 1:
        setSelectedCountry(value);
        break;
      case 2:
        setSelectedAmount(value);
        break;
      case 3:
        setSelectedTaste(value);
        break;
      default:
        break;
    }
  };
  const goTypeSelectPage = () => {
    setPage(1);
  };
  {
    switch (page) {
      case 0:
        return (
          <>
            <Header>
              <Title>오늘의 점메추</Title>
            </Header>
            <Section>
              <Quetion>원하는 추천 방식을 골라줘!</Quetion>
              <Answer>
                <Balloon onClick={() => goTypeResultPage(RECOMMEND_BY.TYPE)}>
                  <BalloonText>취향대로 추천</BalloonText>
                </Balloon>
                <Balloon onClick={() => goTypeResultPage(RECOMMEND_BY.RANDOM)}>
                  <BalloonText>랜덤 추천</BalloonText>
                </Balloon>
              </Answer>
              <Character src={mainCharacter} />
            </Section>
          </>
        );
      case 1:
        return (
          <>
            <Header>
              <Title>오늘의 점메추</Title>
            </Header>
            <Section>
              <Quetion>원하는 추천 방식을 골라줘!</Quetion>
              <Answer>
                <WhiteBox>
                  <BalloonText>{answer}</BalloonText>
                </WhiteBox>
              </Answer>
              <Button onClick={() => nextPage()}>시작!</Button>
              <Character src={mainCharacter} />
            </Section>
          </>
        );
      case 2:
        return (
          <>
            <Header>
              <Title>오늘의 점메추</Title>
            </Header>
            <Section>
              <Quetion>나는 지금 __ 이 땡긴다!</Quetion>
              <Answer>
                {countryOptions.map((option) => (
                  <div key={option.id}>
                    <RadioInput
                      type="radio"
                      id={option.id}
                      name="country"
                      onChange={() => handleNextButton(option.id, 1)}
                      checked={selectedCountry === option.id}
                    ></RadioInput>
                    <RadioBalloon htmlFor={option.id}>
                      <BalloonText>{option.label}</BalloonText>
                    </RadioBalloon>
                  </div>
                ))}
              </Answer>

              <Character src={mainCharacter} />
              <ButtonSection>
                <PrevButton type="button" onClick={() => prevPage()}>
                  이전으로
                </PrevButton>
                {isSelected ? (
                  <ActiveNextButton type="button" onClick={() => nextPage()}>
                    다음으로
                  </ActiveNextButton>
                ) : (
                  <DisabledNextButton type="button" disabled>
                    다음으로
                  </DisabledNextButton>
                )}
              </ButtonSection>
            </Section>
          </>
        );
      case 3:
        return (
          <>
            <Header>
              <Title>오늘의 점메추</Title>
            </Header>
            <Section>
              <Quetion>나는 지금 ___ 하게 먹고싶다</Quetion>
              <Answer>
                {amountOptions.map((option) => (
                  <div key={option.id}>
                    <RadioInput
                      type="radio"
                      id={option.id}
                      name="amount"
                      onChange={() => handleNextButton(option.id, 2)}
                      checked={selectedAmount === option.id}
                    ></RadioInput>
                    <RadioBalloon htmlFor={option.id}>
                      <BalloonText>{option.label}</BalloonText>
                    </RadioBalloon>
                  </div>
                ))}
              </Answer>
              <Character src={mainCharacter} />
              <ButtonSection>
                <PrevButton type="button" onClick={() => prevPage()}>
                  이전으로
                </PrevButton>
                {isSelected ? (
                  <ActiveNextButton type="button" onClick={() => nextPage()}>
                    다음으로
                  </ActiveNextButton>
                ) : (
                  <DisabledNextButton type="button" disabled>
                    다음으로
                  </DisabledNextButton>
                )}
              </ButtonSection>
            </Section>
          </>
        );
      case 4:
        return (
          <>
            <Header>
              <Title>오늘의 점메추</Title>
            </Header>
            <Section>
              <Quetion>나는 지금 __ 맛이 땡긴다</Quetion>
              <Answer>
                {tasteOptions.map((option) => (
                  <div key={option.id}>
                    <RadioInput
                      type="radio"
                      id={option.id}
                      name="taste"
                      onChange={() => handleNextButton(option.id, 3)}
                      checked={selectedTaste === option.id}
                    ></RadioInput>
                    <RadioBalloon htmlFor={option.id}>
                      <BalloonText>{option.label}</BalloonText>
                    </RadioBalloon>
                  </div>
                ))}
              </Answer>
              <Character src={mainCharacter} />
              <ButtonSection>
                <PrevButton type="button" onClick={() => prevPage()}>
                  이전으로
                </PrevButton>
                {isSelected ? (
                  <ActiveNextButton
                    type="button"
                    onClick={() => recommendFood()}
                  >
                    결과보기
                  </ActiveNextButton>
                ) : (
                  <DisabledNextButton type="button" disabled>
                    결과보기
                  </DisabledNextButton>
                )}
              </ButtonSection>
            </Section>
          </>
        );
      case 5:
        return (
          <>
            <Header>
              <Title>오늘의 점메추</Title>
            </Header>
            <Section>
              <Quetion>오늘의 추천음식은</Quetion>
              <Answer>
                <WhiteBox>{result}</WhiteBox>
              </Answer>
              <ActiveNextButton
                type="button"
                onClick={() => goTypeSelectPage(RECOMMEND_BY.TYPE)}
              >
                다시하기
              </ActiveNextButton>

              <Character src={mainCharacter} />
            </Section>
          </>
        );
    }
  }
}

export default App;
