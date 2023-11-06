import {
  Answer,
  BalloonText,
  Button,
  Quetion,
  Section,
  WhiteBox,
} from "../styles/globalStyle";
import { PAGE } from "../utils/constants";
import Header from "./common/Header";
import MainCharacter from "./common/MainCharacter";

export default function StartPage({ answer, nextPage }) {
  return (
    <>
      <Header />
      <Section>
        <Quetion>원하는 추천 방식을 골라줘!</Quetion>
        <Answer>
          <WhiteBox>
            <BalloonText>{answer}</BalloonText>
          </WhiteBox>
        </Answer>
        <Button onClick={() => nextPage(PAGE.START, answer)}>시작!</Button>
        <MainCharacter />
      </Section>
    </>
  );
}
