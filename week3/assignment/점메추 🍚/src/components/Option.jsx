import { BalloonText, RadioBalloon, RadioInput } from "../styles/GlobalStyle";

export const Option = ({ option, saveAnswer, currentPage, selectedValue }) => (
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
