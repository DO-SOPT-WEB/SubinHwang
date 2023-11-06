import {
  ActiveNextButton,
  Answer,
  Quetion,
  Section,
  WhiteBox,
} from "../styles/globalStyle";
import Header from "./common/Header";
import { styled } from "styled-components";
import MainCharacter from "./common/MainCharacter";
import { RECOMMEND_BY } from "../utils/constants";

const FoodImg = styled.img`
  width: 150px;
`;

export default function ResultPage({ result, handleRetry }) {
  return (
    <>
      <Header />
      <Section>
        <Quetion>오늘의 추천음식은</Quetion>
        <Answer>
          <WhiteBox>
            <FoodImg src={result}></FoodImg>
          </WhiteBox>
        </Answer>
        <ActiveNextButton
          type="button"
          onClick={() => handleRetry(RECOMMEND_BY.TYPE)}
        >
          다시하기
        </ActiveNextButton>

        <MainCharacter />
      </Section>
    </>
  );
}
