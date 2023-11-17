import { BalloonText, RadioBalloon, RadioInput } from "../styles/commonStyle";

export const Option = ({ option, saveAnswer, currentPage, selectedValue }) => {
  const { id, name, label } = option;

  return (
    <div key={id}>
      <RadioInput
        type="radio"
        id={id}
        name={name}
        onChange={() => saveAnswer(id, currentPage)}
        checked={selectedValue === id}
      ></RadioInput>
      <RadioBalloon htmlFor={id}>
        <BalloonText>{label}</BalloonText>
      </RadioBalloon>
    </div>
  );
};
