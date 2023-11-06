import {
  Answer,
  BalloonText,
  Button,
  Quetion,
  Section,
  WhiteBox,
} from "../styles/globalStyle";
import Header from "./common/Header";
import MainCharacter from "./common/MainCharacter";

export default function TypeResultPage({ answer, nextPage }) {
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
        <Button onClick={() => nextPage(1, answer)}>시작!</Button>
        <MainCharacter />
      </Section>
    </>
  );
}
