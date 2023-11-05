import {
  Answer,
  BalloonText,
  Button,
  Character,
  Header,
  Quetion,
  Section,
  Title,
  WhiteBox,
} from "../styles/globalStyle";
import mainCharacter from "../assets/img/character.png";

export default function TypeResultPage(answer) {
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
        <Button type="button">시작!</Button>
        <Character src={mainCharacter} />
      </Section>
    </>
  );
}
