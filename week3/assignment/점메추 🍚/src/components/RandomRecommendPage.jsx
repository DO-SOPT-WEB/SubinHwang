import { Section, WhiteBox } from "../styles/globalStyle";
import Header from "./common/Header";
import spinner1 from "../assets/img/spinner1.png";
import spinner2 from "../assets/img/spinner2.png";
import spinner3 from "../assets/img/spinner3.png";
import { styled } from "styled-components";
import { useState, useEffect } from "react";
import ResultPage from "./ResultPage";
import { foodData } from "../utils/constants";

const LoadingBox = styled(WhiteBox)`
  width: 500px;
  height: 500px;
`;
const CountNumber = styled.p`
  color: #000;
  font-size: 3rem;
`;

const Spinner = styled.img`
  position: absolute;
  width: 400px;
  animation: rotate_image 5s linear infinite;
  transform-origin: 50% 50%;
  @keyframes rotate_image {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function RandomRecommendPage({ retry, restart }) {
  const [count, setCount] = useState(3);
  const [image, setImage] = useState(spinner1);
  const [isFinish, setIsFinish] = useState(false);
  const [result, setResult] = useState("");

  const makeRandomResult = () => {
    const foodArray = Object.keys(foodData);
    const randomIndex = Math.floor(Math.random() * foodArray.length);
    const randomFood = foodData[foodArray[randomIndex]].image;
    setResult(randomFood);
  };

  const startCountdown = () => {
    const countdownInterval = setInterval(() => {
      if (count === 1) {
        clearInterval(countdownInterval);
        setIsFinish(true);
      } else {
        setCount(count - 1);
      }
    }, 1000);
  };

  const changeSpinner = () => {
    switch (count) {
      case 3:
        setImage(spinner1);
        break;
      case 2:
        setImage(spinner2);
        break;
      case 1:
        setImage(spinner3);
        break;
      default:
        setImage(spinner1);
        break;
    }
  };

  useEffect(() => {
    makeRandomResult();
  }, []);

  useEffect(() => {
    startCountdown();
    changeSpinner();
  }, [count]);

  return isFinish ? ( //랜덤 추천 결과 페이지
    <ResultPage result={result} retry={retry} />
  ) : (
    <>
      <Header restart={restart} />
      <Section>
        <LoadingBox>
          <CountNumber>{count}</CountNumber>
          <Spinner src={image} alt="회전하고 있는 음식들" />
        </LoadingBox>
      </Section>
    </>
  );
}
