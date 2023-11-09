import { useReducer } from "react";

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

const initialState = {
  page: 0,
  selectedRecommendType: "",
  selectedRegion: "",
  selectedAmount: "",
  selectedTaste: "",
  result: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "MOVE_TO_PREV_PAGE": // 이전 페이지로 이동
      return { ...state, page: state.page - 1 };
    case "MOVE_TO_NEXT_PAGE": // 다음 페이지로 이동
      return { ...state, page: state.page + 1 };
    case "MOVE_TO_PAGE": // 특정 페이지로 이동
      return { ...state, page: action.payload };
    case "SET_SELECTED_RECOMMEND_TYPE":
      return { ...state, selectedRecommendType: action.payload };
    case "SET_SELECTED_REGION":
      return { ...state, selectedRegion: action.payload };
    case "SET_SELECTED_AMOUNT":
      return { ...state, selectedAmount: action.payload };
    case "SET_SELECTED_TASTE":
      return { ...state, selectedTaste: action.payload };
    case "SET_RESULT":
      return { ...state, result: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  /* 이전 페이지로 */
  const prevPage = () => {
    dispatch({ type: "MOVE_TO_PREV_PAGE" });
    dispatch({ type: "ANSWER_SELECTED" });
  };

  /* 다음 페이지로 */
  const nextPage = (currentPage, selectedType) => {
    switch (currentPage) {
      /* 타입 선택 페이지 */
      case PAGE.TYPE_SELECT:
        dispatch({
          type: "SET_SELECTED_RECOMMEND_TYPE",
          payload: selectedType,
        });
        dispatch({ type: "MOVE_TO_NEXT_PAGE" });
        break;

      /* 시작 페이지 */
      case PAGE.START:
        selectedType === RECOMMEND_BY.TYPE //취향대로 추천인지 랜덤추천인지에 따라 페이지 이동
          ? dispatch({
              type: "MOVE_TO_PAGE",
              payload: PAGE.RECOMMEND_BY_TYPE_QUESTION_1,
            })
          : dispatch({
              type: "MOVE_TO_PAGE",
              payload: PAGE.RECOMMEND_BY_RANDOM,
            });
        break;

      /* 취향대로 - 1 */
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_1:
        dispatch({ type: "MOVE_TO_NEXT_PAGE" });
        break;

      /* 취향대로 - 2 */
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_2:
        dispatch({ type: "MOVE_TO_NEXT_PAGE" });
        break;

      /* 취향대로 - 3 */
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_3:
        resultPage();
        break;

      default:
        dispatch({ type: "MOVE_TO_NEXT_PAGE" });
        break;
    }
  };

  /* 선택된 답변에 해당하는 음식의 점수를 증가 시킨 후 가장 점수가 높은 음식을 찾아 결과 화면으로 이동 */
  const resultPage = () => {
    Object.keys(foodData).forEach((food) => {
      foodData[food].region === state.selectedRegion && foodData[food].score++;
      foodData[food].amount === state.selectedAmount && foodData[food].score++;
      foodData[food].taste === state.selectedTaste && foodData[food].score++;
    });

    findBestFood();

    dispatch({ type: "MOVE_TO_NEXT_PAGE" });
  };

  /* 가장 점수가 높은 음식을 찾는 함수 */
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

    dispatch({
      type: "SET_RESULT",
      payload: foodData[bestFoods[randomIndex]].image,
    });
  };

  /* 답변 저장 */
  const saveAnswer = (value, questionNumber) => {
    switch (questionNumber) {
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_1:
        dispatch({ type: "SET_SELECTED_REGION", payload: value });
        break;

      case PAGE.RECOMMEND_BY_TYPE_QUESTION_2:
        dispatch({ type: "SET_SELECTED_AMOUNT", payload: value });
        break;

      case PAGE.RECOMMEND_BY_TYPE_QUESTION_3:
        dispatch({ type: "SET_SELECTED_TASTE", payload: value });
        break;

      default:
        break;
    }
  };

  /* 답변 초기화 */
  const resetAnswer = () => {
    dispatch({ type: "SET_SELECTED_REGION", payload: "" });
    dispatch({ type: "SET_SELECTED_AMOUNT", payload: "" });
    dispatch({ type: "SET_SELECTED_TASTE", payload: "" });
    dispatch({ type: "SET_RESULT", payload: "" });
    Object.keys(foodData).forEach((food) => {
      foodData[food].score = 0;
    });
  };

  /* 다시하기 */
  const retry = () => {
    resetAnswer();
    dispatch({ type: "MOVE_TO_PAGE", payload: PAGE.START });
  };

  /* 처음으로 */
  const restart = () => {
    resetAnswer();
    dispatch({ type: "MOVE_TO_PAGE", payload: PAGE.TYPE_SELECT });
  };

  {
    switch (state.page) {
      /* 추천 방식 선택 화면 */
      case PAGE.TYPE_SELECT:
        return <TypeSelectPage nextPage={nextPage} />;

      /* 선택된 추천 방식 확인 & 시작 화면 */
      case PAGE.START:
        return (
          <StartPage
            answer={state.selectedRecommendType}
            nextPage={nextPage}
            restart={restart}
          />
        );

      /* 취향대로 추천 - 첫번째 질문 - 나는 지금 __ 이 땡긴다!*/
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_1:
        return (
          <TypeQuestionPage
            type={question.region}
            options={regionOptions}
            selectedValue={state.selectedRegion}
            saveAnswer={saveAnswer}
            currentPage={state.page}
            prevPage={prevPage}
            nextPage={nextPage}
            restart={restart}
          />
        );

      /* 취향대로 추천 - 두번째 질문 - 나는 지금 ___ 하게 먹고 싶다! */
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_2:
        return (
          <TypeQuestionPage
            type={question.amount}
            options={amountOptions}
            selectedValue={state.selectedAmount}
            saveAnswer={saveAnswer}
            currentPage={state.page}
            prevPage={prevPage}
            nextPage={nextPage}
            restart={restart}
          />
        );

      /* 취향대로 추천 - 세번째 질문 - 나는 지금 __ 맛이 땡긴다! */
      case PAGE.RECOMMEND_BY_TYPE_QUESTION_3:
        return (
          <TypeQuestionPage
            type={question.taste}
            options={tasteOptions}
            selectedValue={state.selectedTaste}
            saveAnswer={saveAnswer}
            currentPage={state.page}
            prevPage={prevPage}
            nextPage={nextPage}
            restart={restart}
          />
        );

      /* 취향대로 추천 - 결과 페이지 */
      case PAGE.RECOMMEND_BY_TYPE_RESULT:
        return (
          <ResultPage result={state.result} retry={retry} restart={restart} />
        );

      /* 랜덤 추천 페이지 */
      case PAGE.RECOMMEND_BY_RANDOM:
        return <RandomRecommendPage retry={retry} restart={restart} />;

      default:
        break;
    }
  }
}

export default App;
