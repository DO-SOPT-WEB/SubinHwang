import {
  Answer,
  BalloonText,
  Button,
  Quetion,
  Section,
  WhiteBox,
} from "../styles/GlobalStyle";
import { PAGE } from "../utils/constants";
import Header from "../components/Header";
import MainCharacter from "../components/MainCharacter";

export default function StartPage({ answer, nextPage, restart }) {
  return (
    <>
      <Header restart={restart} />
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
