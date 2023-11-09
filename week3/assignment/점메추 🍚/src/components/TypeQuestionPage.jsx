import {
  Answer,
  BalloonText,
  Quetion,
  RadioBalloon,
  RadioInput,
  Section,
} from "../styles/globalStyle";

import Header from "./common/Header";
import MainCharacter from "./common/MainCharacter";
import PageMoveButton from "./common/PageMoveButton";
import ProgressBar from "./common/ProgressBar";

export default function TypeQuestionPage({
  type,
  options,
  selectedValue,
  saveAnswer,
  currentPage,
  prevPage,
  nextPage,
  restart,
}) {
  return (
    <>
      <Header restart={restart} />
      <Section>
        <ProgressBar page={currentPage - 1} />
        <Quetion>{type.question}</Quetion>
        <Answer>
          {options.map((option) => (
            <div key={option.id}>
              <RadioInput
                type="radio"
                id={option.id}
                name={type.name}
                onChange={() => saveAnswer(option.id, currentPage)}
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
          currentPage={currentPage}
          isSelected={selectedValue}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Section>
    </>
  );
}
