import {
  Button,
  Answer,
  Quetion,
  Section,
  WhiteBox,
} from "../styles/GlobalStyle";
import { styled } from "styled-components";
import Header from "../components/Header";
import MainCharacter from "../components/MainCharacter";

const FoodImg = styled.img`
  width: 150px;
`;

export default function ResultPage({ type, result, retry, restart }) {
  return (
    <>
      <Header restart={restart} />
      <Section>
        <Quetion>오늘의 추천음식은</Quetion>
        <Answer>
          <WhiteBox>
            <FoodImg src={result} alt="추천음식"></FoodImg>
          </WhiteBox>
        </Answer>
        <Button type="button" onClick={() => retry(type)}>
          다시하기
        </Button>
        <MainCharacter />
      </Section>
    </>
  );
}
