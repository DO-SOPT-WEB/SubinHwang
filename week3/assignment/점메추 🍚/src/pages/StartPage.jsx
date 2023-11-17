import MainSection from "../components/MainSection";
import { BalloonText, Button, WhiteBox } from "../styles/commonStyle";
import { PAGE } from "../utils/page";

export default function StartPage({ answer, nextPage, restart }) {
  const contents = (
    <WhiteBox>
      <BalloonText>{answer}</BalloonText>
    </WhiteBox>
  );
  const nav = (
    <Button onClick={() => nextPage(PAGE.START, answer)}>시작!</Button>
  );
  return (
    <>
      <MainSection
        page={PAGE.START}
        contents={contents}
        nav={nav}
        restart={restart}
      />
    </>
  );
}
