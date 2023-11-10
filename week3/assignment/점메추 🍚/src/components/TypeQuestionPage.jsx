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

const Option = ({ option, saveAnswer, currentPage, selectedValue }) => (
  <div key={option.id}>
    <RadioInput
      type="radio"
      id={option.id}
      name={option.name}
      onChange={() => saveAnswer(option.id, currentPage)}
      checked={selectedValue === option.id}
    ></RadioInput>
    <RadioBalloon htmlFor={option.id}>
      <BalloonText>{option.label}</BalloonText>
    </RadioBalloon>
  </div>
);

const TypeQuestionPage = ({
  type,
  options,
  selectedValue,
  saveAnswer,
  currentPage,
  prevPage,
  nextPage,
  restart,
}) => (
  <>
    <Header restart={restart} />
    <Section>
      <ProgressBar page={currentPage - 1} />
      <Quetion>{type.question}</Quetion>
      <Answer>
        {options.map((option) => (
          <Option
            key={option.id}
            option={option}
            saveAnswer={saveAnswer}
            currentPage={currentPage}
            selectedValue={selectedValue}
          />
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

export default TypeQuestionPage;
