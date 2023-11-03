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
    font-size: 3rem;
    font-weight: 100;
  `;
  const Character = styled.img`
    width: 150px;
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
    height: 200px;

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

  const Button = styled.button`
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 20px;
    background: #13868d;
    color: white;
  `;
  const [page, setPage] = useState(0);
  const nextPage = (answer) => {
    setAnswer(answer);
    setPage(page + 1);
  };
  const [answer, setAnswer] = useState("");

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
              <Button>시작!</Button>
              <Character src={mainCharacter} />
            </Section>
          </>
        );
    }
  }
}

export default App;
