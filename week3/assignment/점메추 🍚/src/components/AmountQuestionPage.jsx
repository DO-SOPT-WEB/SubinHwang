import {
  Answer,
  BalloonText,
  Quetion,
  RadioBalloon,
  RadioInput,
  Section,
} from "../styles/globalStyle";
import { amountOptions } from "../utils/constants";
import Header from "./common/Header";
import MainCharacter from "./common/MainCharacter";
import PageMoveButton from "./common/PageMoveButton";

export default function AmountQuestionPage({
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
        <Quetion>나는 지금 ___ 하게 먹고싶다!</Quetion>
        <Answer>
          {amountOptions.map((option) => (
            <div key={option.id}>
              <RadioInput
                type="radio"
                id={option.id}
                name="amount"
                onChange={() => handleNextButton(option.id, 2)}
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
          currentPage={3}
          isSelected={isSelected}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Section>
    </>
  );
}
