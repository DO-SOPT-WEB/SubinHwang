import { useEffect } from "react";
import { useMemo, useState } from "react";
import { Answer, Quetion, Section } from "../styles/commonStyle";
import { PAGE } from "../utils/page";
import { QUESTION } from "../utils/question";
import Header from "./Header";
import MainCharacter from "./MainCharacter";
import ProgressBar from "./ProgressBar";

const MainSection = ({ page, nav, restart, contents }) => {
  const mainCharacter = useMemo(() => <MainCharacter />, []);
  const [question, setQuestion] = useState("");
  const isQuestionPage =
    page === PAGE.RECOMMEND_BY_TYPE_QUESTION_1 ||
    page === PAGE.RECOMMEND_BY_TYPE_QUESTION_2 ||
    page === PAGE.RECOMMEND_BY_TYPE_QUESTION_3;
  useEffect(() => {
    switch (page) {
      case PAGE.TYPE_SELECT:
        setQuestion(QUESTION.type.question);
        break;
      case PAGE.START:
        setQuestion(QUESTION.type.question);
        break;
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_1:
        setQuestion(QUESTION.region.question);
        break;
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_2:
        setQuestion(QUESTION.amount.question);
        break;
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_3:
        setQuestion(QUESTION.taste.question);
        break;
      case PAGE.RECOMMEND_BY_TYPE_RESULT:
        setQuestion(QUESTION.result.title);
    }
  }, [page]);

  return (
    <>
      {page === PAGE.TYPE_SELECT ? (
        <Header isTypeSelectPage={true} />
      ) : (
        <Header restart={restart} />
      )}
      <Section>
        {}
        {isQuestionPage && <ProgressBar page={page - 1} />}
        <Quetion>{question}</Quetion>
        <Answer>{contents}</Answer>
        {mainCharacter}
        {nav}
      </Section>
    </>
  );
};
export default MainSection;
