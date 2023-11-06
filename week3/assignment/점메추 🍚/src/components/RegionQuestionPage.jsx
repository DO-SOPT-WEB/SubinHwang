import {
  Answer,
  BalloonText,
  Quetion,
  RadioBalloon,
  RadioInput,
  Section,
} from "../styles/globalStyle";
import { regionOptions } from "../utils/constants";
import Header from "./common/Header";
import MainCharacter from "./common/MainCharacter";
import PageMoveButton from "./common/PageMoveButton";

export default function RegionQuestionPage({
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
        <Quetion>나는 지금 __ 이 땡긴다!</Quetion>
        <Answer>
          {regionOptions.map((option) => (
            <div key={option.id}>
              <RadioInput
                type="radio"
                id={option.id}
                name="region"
                onChange={() => handleNextButton(option.id, 1)}
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
          currentPage={2}
          isSelected={isSelected}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Section>
    </>
  );
}
