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

export default function TypeQuestionPage({
  type,
  options,
  isSelected,
  selectedValue,
  handleNextButton,
  currentPage,
  prevPage,
  nextPage,
}) {
  return (
    <>
      <Header />
      <Section>
        <Quetion>{type.question}</Quetion>
        <Answer>
          {options.map((option) => (
            <div key={option.id}>
              <RadioInput
                type="radio"
                id={option.id}
                name={type.name}
                onChange={() => handleNextButton(option.id, currentPage)}
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
          isSelected={isSelected}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Section>
    </>
  );
}
