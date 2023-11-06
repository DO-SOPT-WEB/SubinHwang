import {
  Answer,
  BalloonText,
  Quetion,
  RadioBalloon,
  RadioInput,
  Section,
} from "../styles/globalStyle";
import { tasteOptions } from "../utils/constants";
import Header from "./common/Header";
import MainCharacter from "./common/MainCharacter";
import PageMoveButton from "./common/PageMoveButton";

export default function TasteQuestionPage({
  isSelected,
  selectedValue,
  handleNextButton,
  prevPage,
  nextPage,
}) {
  return (
    <>
      <Header />
      <Section>
        <Quetion>나는 지금 __ 맛이 땡긴다!</Quetion>
        <Answer>
          {tasteOptions.map((option) => (
            <div key={option.id}>
              <RadioInput
                type="radio"
                id={option.id}
                name="taste"
                onChange={() => handleNextButton(option.id, 3)}
                checked={selectedValue === option.id}
              ></RadioInput>
              <RadioBalloon htmlFor={option.id}>
                <BalloonText>{option.label}</BalloonText>
              </RadioBalloon>
            </div>
          ))}
        </Answer>
        <MainCharacter />
        <PageMoveButton
          currentPage={4}
          isSelected={isSelected}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Section>
    </>
  );
}
