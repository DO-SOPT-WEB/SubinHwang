import mainCharacter from "./assets/img/character.png";
import "./App.css";
import { Header, Section } from "./styles/globalStyle";
import { styled } from "styled-components";
import { useState } from "react";

function App() {
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
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
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
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
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
  const [page, setPage] = useState(0);
  const nextPage = (answer) => {
    setAnswer(answer);
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
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const countryOptions = [
    { id: "korean-food", label: "한식" },
    { id: "western-food", label: "양식" },
    { id: "japanese-and-chinese-food", label: "일/중식" },
  ];
  const amountOptions = [
    { id: "largely", label: "거하게" },
    { id: "properly", label: "적당하게" },
    { id: "simply", label: "간단하게" },
  ];
  const flavorOptions = [
    { id: "fat", label: "기름진 맛" },
    { id: "plain", label: "담백한 맛" },
  ];

  const handleNextButton = (value, questionNumber) => {
    !isSelected && setSelected(!isSelected);
    switch (questionNumber) {
      case 1:
        setSelectedCountry(value);
        break;
      case 2:
        setSelectedAmount(value);
        break;
      case 3:
        setSelectedFlavor(value);
        break;
      default:
        break;
    }
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
                <Balloon onClick={() => nextPage("취향대로 추천")}>
                  <BalloonText>취향대로 추천</BalloonText>
                </Balloon>
                <Balloon onClick={() => nextPage("랜덤 추천")}>
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
              <Button onClick={() => nextPage("랜덤 추천")}>시작!</Button>
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
                  <DisabledNextButton type="button" onClick={() => nextPage()}>
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
                  <DisabledNextButton type="button" onClick={() => nextPage()}>
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
                {flavorOptions.map((option) => (
                  <div key={option.id}>
                    <RadioInput
                      type="radio"
                      id={option.id}
                      name="flavor"
                      onChange={() => handleNextButton(option.id, 3)}
                      checked={selectedFlavor === option.id}
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
                    결과보기
                  </ActiveNextButton>
                ) : (
                  <DisabledNextButton type="button" onClick={() => nextPage()}>
                    결과보기
                  </DisabledNextButton>
                )}
              </ButtonSection>
            </Section>
          </>
        );
    }
  }
}

export default App;
