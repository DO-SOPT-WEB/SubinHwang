import { useState } from "react";
import {
  amountOptions,
  foodData,
  question,
  RECOMMEND_BY,
  regionOptions,
  tasteOptions,
} from "./utils/constants";
import TypeSelectPage from "./components/TypeSelectPage";
import TypeResultPage from "./components/TypeResultPage";
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

  const nextPage = (currentPage, selectedType) => {
    switch (currentPage) {
      case 0:
        setAnswer(selectedType);
        setPage(page + 1);
        break;
      case 1:
        selectedType === RECOMMEND_BY.TYPE
          ? !selectedRegion && setSelected(false)
          : setPage(6);
        break;
      case 2:
        !selectedAmount && setSelected(false);
        setPage(page + 1);
        break;
      case 3:
        !selectedTaste && setSelected(false);
        setPage(page + 1);
        break;
      case 4:
        resultPage();
        break;
      default:
        setPage(page + 1);
        break;
    }
  };
  const prevPage = () => {
    setPage(page - 1);
    setSelected(true);
  };

  const resultPage = () => {
    Object.keys(foodData).map((food) => {
      foodData[food].region === selectedRegion && foodData[food].score++;
      foodData[food].amount === selectedAmount && foodData[food].score++;
      foodData[food].taste === selectedTaste && foodData[food].score++;
    });
    findMostSuitableFood();
    setPage(page + 1);
  };

  const findMostSuitableFood = () => {
    let mostSuitableFoods = [];
    let maxCount = -1;

    for (const food in foodData) {
      if (foodData[food].score > maxCount) {
        mostSuitableFoods = [food];
        maxCount = foodData[food].score;
      } else if (foodData[food].score === maxCount) {
        mostSuitableFoods.push(food);
      }
    }
    console.log(mostSuitableFoods);
    const randomIndex = Math.floor(Math.random() * mostSuitableFoods.length);
    setResult(foodData[mostSuitableFoods[randomIndex]].image);
  };

  const handleNextButton = (value, questionNumber) => {
    !isSelected && setSelected(!isSelected);
    switch (questionNumber) {
      case 2:
        setSelectedRegion(value);
        break;
      case 3:
        setSelectedAmount(value);
        break;
      case 4:
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
    setPage(1);
  };

  {
    switch (page) {
      case 0: //추천 방식 선택 화면
        return <TypeSelectPage nextPage={nextPage} />;
      case 1: //선택된 추천 방식 확인 화면
        return <TypeResultPage answer={answer} nextPage={nextPage} />;
      case 2: //취향대로 추천 - 첫번째 질문 - 나는 지금 __ 이 땡긴다!
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
      case 3: //취향대로 추천 - 두번째 질문 - 나는 지금 ___ 하게 먹고 싶다!
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
      case 4: //취향대로 추천 - 세번째 질문 - 나는 지금 __ 맛이 땡긴다!
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
      case 5: //취향대로 추천 - 결과 페이지
        return <ResultPage result={result} handleRetry={retry} />;
      case 6:
        return <RandomRecommendPage handleRetry={retry} />;
    }
  }
}

export default App;
