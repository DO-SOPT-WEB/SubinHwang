import {
  Answer,
  Balloon,
  BalloonText,
  Quetion,
  Section,
} from "../styles/GlobalStyle";

import { PAGE, RECOMMEND_BY } from "../utils/constants";
import Header from "../components/Header";
import MainCharacter from "../components/MainCharacter";

export default function TypeSelectPage({ nextPage }) {
  return (
    <>
      <Header isTypeSelectPage={true} />
      <Section>
        <Quetion>원하는 추천 방식을 골라줘!</Quetion>
        <Answer>
          <Balloon
            onClick={() => nextPage(PAGE.TYPE_SELECT, RECOMMEND_BY.TYPE)}
          >
            <BalloonText>{RECOMMEND_BY.TYPE}</BalloonText>
          </Balloon>
          <Balloon
            onClick={() => nextPage(PAGE.TYPE_SELECT, RECOMMEND_BY.RANDOM)}
          >
            <BalloonText>{RECOMMEND_BY.RANDOM}</BalloonText>
          </Balloon>
        </Answer>
        <MainCharacter />
      </Section>
    </>
  );
}
