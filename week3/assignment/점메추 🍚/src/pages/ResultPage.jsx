import { Button, WhiteBox } from "../styles/commonStyle";
import { styled } from "styled-components";
import MainSection from "../components/MainSection";
import { PAGE } from "../utils/page";

const FoodImg = styled.img`
  width: 150px;
`;

export default function ResultPage({ type, result, retry, restart }) {
  const contents = (
    <WhiteBox>
      <FoodImg src={result} alt="추천음식"></FoodImg>
    </WhiteBox>
  );

  const nav = (
    <Button type="button" onClick={() => retry(type)}>
      다시하기
    </Button>
  );

  return (
    <MainSection
      page={PAGE.RECOMMEND_BY_TYPE_RESULT}
      restart={restart}
      contents={contents}
      nav={nav}
    />
  );
}
