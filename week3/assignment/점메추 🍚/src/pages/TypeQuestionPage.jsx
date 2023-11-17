import PageMoveButton from "../components/PageMoveButton";
import ProgressBar from "../components/ProgressBar";
import { Option } from "../components/Option";
import MainSection from "../components/MainSection";

const TypeQuestionPage = ({
  page,
  options,
  selectedValue,
  saveAnswer,
  currentPage,
  prevPage,
  nextPage,
  restart,
}) => {
  const contents = (
    <>
      {options.map((option) => (
        <Option
          key={option.id}
          option={option}
          saveAnswer={saveAnswer}
          currentPage={currentPage}
          selectedValue={selectedValue}
        />
      ))}
    </>
  );

  const nav = (
    <PageMoveButton
      currentPage={currentPage}
      isSelected={selectedValue}
      prevPage={prevPage}
      nextPage={nextPage}
    />
  );
  const progress = <ProgressBar page={currentPage - 1} />;
  return (
    <>
      <MainSection
        restart={restart}
        page={page}
        progressBar={progress}
        contents={contents}
        nav={nav}
      />
    </>
  );
};

export default TypeQuestionPage;
