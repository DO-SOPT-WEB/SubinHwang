import {
  ActiveNextButton,
  ButtonSection,
  DisabledNextButton,
  PrevButton,
} from "../../styles/globalStyle";

export default function PageMoveButton({
  isLastQuestion,
  isSelected,
  prevPage,
  nextPage,
}) {
  return (
    <ButtonSection>
      <PrevButton type="button" onClick={() => prevPage()}>
        이전으로
      </PrevButton>
      {isSelected ? (
        <ActiveNextButton
          type="button"
          onClick={() => nextPage(isLastQuestion)}
        >
          다음으로
        </ActiveNextButton>
      ) : (
        <DisabledNextButton type="button" disabled>
          다음으로
        </DisabledNextButton>
      )}
    </ButtonSection>
  );
}
