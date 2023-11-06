import { useState } from "react";
import { foodData, RECOMMEND_BY } from "./utils/constants";
import TypeSelectPage from "./components/TypeSelectPage";
import TypeResultPage from "./components/TypeResultPage";
import RegionQuestionPage from "./components/RegionQuestionPage";
import AmountQuestionPage from "./components/AmountQuestionPage";
import TasteQuestionPage from "./components/TasteQuestionPage";
import ResultPage from "./components/ResultPage";

function App() {
  const [page, setPage] = useState(0);
  const [answer, setAnswer] = useState("");
  const [isSelected, setSelected] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [selectedTaste, setSelectedTaste] = useState("");
  const [result, setResult] = useState("");

  const goTypeResultPage = (type) => {
    setAnswer(type);
    setPage(page + 1);
  };
  const nextPage = (isLastPage) => {
    isLastPage === true && resultPage;
    setPage(page + 1);
    setSelected(false);
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
      case 1:
        setSelectedRegion(value);
        break;
      case 2:
        setSelectedAmount(value);
        break;
      case 3:
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

  const retry = (type) => {
    resetAnswer();
    type === RECOMMEND_BY.TYPE ? setPage(1) : setPage(5);
  };

  {
    switch (page) {
      case 0: //추천 방식 선택 화면
        return <TypeSelectPage nextPage={goTypeResultPage} />;
      case 1: //선택된 추천 방식 확인 화면
        return <TypeResultPage answer={answer} nextPage={nextPage} />;
      case 2: //취향대로 추천 - 첫번째 질문 - 나는 지금 __ 이 땡긴다!
        return (
          <RegionQuestionPage
            isSelected={isSelected}
            selectedValue={selectedRegion}
            handleNextButton={handleNextButton}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        );
      case 3: //취향대로 추천 - 두번째 질문 - 나는 지금 ___ 하게 먹고싶다!
        return (
          <AmountQuestionPage
            isSelected={isSelected}
            selectedValue={selectedAmount}
            handleNextButton={handleNextButton}
            prevPage={prevPage}
            nextPage={nextPage}
          />
        );
      case 4: //취향대로 추천 - 세번째 질문 - 나는 지금 __ 맛이 땡긴다!
        return (
          <TasteQuestionPage
            isSelected={isSelected}
            selectedValue={selectedTaste}
            handleNextButton={handleNextButton}
            prevPage={prevPage}
            nextPage={resultPage}
          />
        );
      case 5:
        return <ResultPage result={result} handleRetry={retry} />;
    }
  }
}

export default App;
