import {
  Answer,
  Balloon,
  BalloonText,
  Quetion,
  Section,
} from "../styles/globalStyle";
import { RECOMMEND_BY } from "../utils/constants";
import Header from "./common/Header";
import MainCharacter from "./common/MainCharacter";

export default function TypeSelectPage({ nextPage }) {
  return (
    <>
      <Header />
      <Section>
        <Quetion>원하는 추천 방식을 골라줘!</Quetion>
        <Answer>
          <Balloon onClick={() => nextPage(RECOMMEND_BY.TYPE)}>
            <BalloonText>{RECOMMEND_BY.TYPE}</BalloonText>
          </Balloon>
          <Balloon onClick={() => nextPage(RECOMMEND_BY.RANDOM)}>
            <BalloonText>{RECOMMEND_BY.RANDOM}</BalloonText>
          </Balloon>
        </Answer>
        <MainCharacter />
      </Section>
    </>
  );
}
