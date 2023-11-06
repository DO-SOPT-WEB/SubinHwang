import mainCharacter from "./assets/img/character.png";
import "./App.css";
import { Header, Section } from "./styles/globalStyle";
import { styled } from "styled-components";
import { useState } from "react";
import {
  amountOptions,
  countryOptions,
  foodData,
  tasteOptions,
} from "./utils/constants";

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
const FoodImg = styled.img`
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

  padding: 20px 0 0;
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

  const [answer, setAnswer] = useState("");
  const [isSelected, setSelected] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedTaste, setSelectedTaste] = useState("");
  const [result, setResult] = useState("");

  const recommendFood = () => {
    Object.keys(foodData).map((food) => {
      foodData[food].country === selectedCountry && foodData[food].score++;
      foodData[food].amount === selectedAmount && foodData[food].score++;
      foodData[food].taste === selectedTaste && foodData[food].score++;
    });
    console.log(foodData);
    findMostSuitableFood();
    nextPage();
  };

  const findMostSuitableFood = () => {
    let mostSuitableFoods = [];
    let maxCount = -1;

    for (const food in foodData) {
      if (foodData[food].score > maxCount) {
        mostSuitableFoods = [food];
        maxCount = foodData[food].score;
      } else if (foodData[food].score === maxCount) {
        mostSuitableFoods.push(food);
      }
    }
    console.log(mostSuitableFoods);
    const randomIndex = Math.floor(Math.random() * mostSuitableFoods.length);
    setResult(foodData[mostSuitableFoods[randomIndex]].image);
  };

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
                <WhiteBox>
                  <FoodImg src={result}></FoodImg>
                </WhiteBox>
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
