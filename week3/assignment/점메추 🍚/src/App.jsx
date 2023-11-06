import { useState } from "react";

import {
  amountOptions,
  foodData,
  PAGE,
  question,
  RECOMMEND_BY,
  regionOptions,
  tasteOptions,
} from "./utils/constants";

import TypeSelectPage from "./components/TypeSelectPage";
import StartPage from "./components/StartPage";
import ResultPage from "./components/ResultPage";
import TypeQuestionPage from "./components/TypeQuestionPage";
import RandomRecommendPage from "./components/RandomRecommendPage";

function App() {
  const [page, setPage] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isSelected, setSelected] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedTaste, setSelectedTaste] = useState("");
  const [result, setResult] = useState("");

  const prevPage = () => {
    setPage(page - 1);
    setSelected(true);
  };

  const nextPage = (currentPage, selectedType) => {
    switch (currentPage) {
      case PAGE.TYPE_SELECT:
        setAnswer(selectedType);
        setPage(page + 1);
        break;
      case PAGE.START:
        selectedType === RECOMMEND_BY.TYPE
          ? !selectedRegion && (setSelected(false), setPage(2))
          : setPage(6);
        break;
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_1:
        !selectedAmount && setSelected(false);
        setPage(page + 1);
        break;
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_2:
        !selectedTaste && setSelected(false);
        setPage(page + 1);
        break;
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_3:
        resultPage();
        break;
      default:
        setPage(page + 1);
        break;
    }
  };

  const resultPage = () => {
    Object.keys(foodData).map((food) => {
      foodData[food].region === selectedRegion && foodData[food].score++;
      foodData[food].amount === selectedAmount && foodData[food].score++;
      foodData[food].taste === selectedTaste && foodData[food].score++;
    });
    findBestFood();
    setPage(page + 1);
  };

  const findBestFood = () => {
    let bestFoods = [];
    let maxCount = -1;

    for (const food in foodData) {
      if (foodData[food].score > maxCount) {
        bestFoods = [food];
        maxCount = foodData[food].score;
      } else if (foodData[food].score === maxCount) {
        bestFoods.push(food);
      }
    }
    const randomIndex = Math.floor(Math.random() * bestFoods.length);
    setResult(foodData[bestFoods[randomIndex]].image);
  };

  const handleNextButton = (value, questionNumber) => {
    !isSelected && setSelected(!isSelected);
    switch (questionNumber) {
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_1:
        setSelectedRegion(value);
        break;
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_2:
        setSelectedAmount(value);
        break;
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_3:
        setSelectedTaste(value);
        break;
      default:
        break;
    }
  };

  const resetAnswer = () => {
    setSelected(false);
    setSelectedRegion("");
    setSelectedAmount("");
    setSelectedTaste("");
    setResult("");
    Object.keys(foodData).map((food) => {
      foodData[food].score = 0;
    });
  };

  const retry = () => {
    resetAnswer();
    setPage(PAGE.START);
  };

  {
    switch (page) {
      case PAGE.TYPE_SELECT: //추천 방식 선택 화면
        return <TypeSelectPage nextPage={nextPage} />;
      case PAGE.START: //선택된 추천 방식 확인 & 시작 화면
        return <StartPage answer={answer} nextPage={nextPage} />;
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_1: //취향대로 추천 - 첫번째 질문 - 나는 지금 __ 이 땡긴다!
        return (
          <TypeQuestionPage
            type={question.region}
            options={regionOptions}
            isSelected={isSelected}
            selectedValue={selectedRegion}
            handleNextButton={handleNextButton}
            currentPage={page}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        );
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_2: //취향대로 추천 - 두번째 질문 - 나는 지금 ___ 하게 먹고 싶다!
        return (
          <TypeQuestionPage
            type={question.amount}
            options={amountOptions}
            isSelected={isSelected}
            selectedValue={selectedAmount}
            handleNextButton={handleNextButton}
            currentPage={page}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        );
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_3: //취향대로 추천 - 세번째 질문 - 나는 지금 __ 맛이 땡긴다!
        return (
          <TypeQuestionPage
            type={question.taste}
            options={tasteOptions}
            isSelected={isSelected}
            selectedValue={selectedTaste}
            handleNextButton={handleNextButton}
            currentPage={page}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        );
      case PAGE.RECOMMEND_BY_TYPE_RESULT: //취향대로 추천 - 결과 페이지
        return <ResultPage result={result} handleRetry={retry} />;
      case PAGE.RECOMMEND_BY_RANDOM: //랜덤 추천
        return <RandomRecommendPage handleRetry={retry} />;
      default:
        break;
    }
  }
}

export default App;
