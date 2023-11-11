import { useMemo } from "react";
import { Answer, Quetion, Section } from "../styles/GlobalStyle";

import Header from "../components/Header";
import MainCharacter from "../components/MainCharacter";
import PageMoveButton from "../components/PageMoveButton";
import ProgressBar from "../components/ProgressBar";
import { Option } from "../components/Option";

const TypeQuestionPage = ({
  type,
  options,
  selectedValue,
  saveAnswer,
  currentPage,
  prevPage,
  nextPage,
  restart,
}) => {
  const mainCharacter = useMemo(() => <MainCharacter />, []);

  return (
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
        {mainCharacter}
        <PageMoveButton
          currentPage={currentPage}
          isSelected={selectedValue}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Section>
    </>
  );
};

export default TypeQuestionPage;
