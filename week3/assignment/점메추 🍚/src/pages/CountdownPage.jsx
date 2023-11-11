import { Section, WhiteBox } from "../styles/GlobalStyle";
import Header from "../components/Header";
import spinner1 from "../assets/img/spinner1.png";
import spinner2 from "../assets/img/spinner2.png";
import spinner3 from "../assets/img/spinner3.png";
import { styled } from "styled-components";
import { useState, useEffect, useRef } from "react";
import ResultPage from "./ResultPage";
import { foodData } from "../utils/constants";

const LoadingBox = styled(WhiteBox)`
  width: 500px;
  height: 500px;
`;

const CountNumber = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.lg};
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

export default function CountdownPage({ retry, restart }) {
  const [count, setCount] = useState(3);
  const [image, setImage] = useState(spinner1);
  const [isFinish, setIsFinish] = useState(false);
  const [result, setResult] = useState("");

  function useInterval(callback, delay) {
    const savedCallback = useRef();
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const makeRandomResult = () => {
    const foodArray = Object.keys(foodData);
    const randomIndex = Math.floor(Math.random() * foodArray.length);
    const randomFood = foodData[foodArray[randomIndex]].image;
    setResult(randomFood);
  };

  useInterval(() => {
    if (count === 1) {
      setIsFinish(true);
    } else {
      setCount(count - 1);
    }
  }, 1000);

  useEffect(() => {
    makeRandomResult();
  }, []);

  useEffect(() => {
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

    changeSpinner();
  }, [count]);

  return isFinish ? ( //랜덤 추천 결과 페이지
    <ResultPage result={result} retry={retry} restart={restart} />
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
