import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sign } from "../styles/commonStyle";
import { PAGE } from "../constants/page";
import Input from "./Input";
import SignUp from "./SingUp";
import { INPUT } from "../constants/input";

const SignForm = ({ type }) => {
  const navigate = useNavigate();

  const navigateToSignUpPage = () => {
    navigate("/signup");
  };

  const [isExist, setIsExist] = useState(0); //기본 값(중복체크 안함)은 0, 중복이라면 1, 중복이 아니라면 2
  const [isInputsFilled, setIsInputsFilled] = useState(false);
  const [inputValues, setInputValues] = useState({
    [INPUT.PW]: "",
    [INPUT.PWCHECK]: "",
    [INPUT.NAME]: "",
  });

  const handleInputChange = (inputType, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [inputType]: value,
    }));
  };

  useEffect(() => {
    const validateInputs = () => {
      const requiredInputs = [INPUT.ID, INPUT.PW, INPUT.PWCHECK, INPUT.NAME];
      const areInputsFilled = requiredInputs.every(
        (inputType) => inputValues[inputType]
      );
      return areInputsFilled;
    };

    const validateDoubleCheck = () => {
      return isExist === 2;
    };

    const validatePasswordCheck = () => {
      return inputValues[INPUT.PW] === inputValues[INPUT.PWCHECK];
    };

    const isAllValid =
      validateInputs() & validateDoubleCheck() & validatePasswordCheck();

    isAllValid ? setIsInputsFilled(true) : setIsInputsFilled(false);
  }, [inputValues, isExist]);

  return (
    <Sign.Wrapper>
      <Sign.Title>{type === PAGE.LOGIN ? "로그인" : "회원가입"}</Sign.Title>
      <Input
        pageType={type}
        inputType={INPUT.ID}
        onInputChange={handleInputChange}
        isExist={isExist}
        setIsExist={setIsExist}
      ></Input>
      <Input
        pageType={type}
        inputType={INPUT.PW}
        onInputChange={handleInputChange}
      ></Input>
      {type === PAGE.SIGNUP && (
        <>
          <Input
            pageType={type}
            inputType={INPUT.PWCHECK}
            onInputChange={handleInputChange}
          ></Input>
          <Input
            pageType={type}
            inputType={INPUT.NAME}
            onInputChange={handleInputChange}
          ></Input>
        </>
      )}
      {type === PAGE.LOGIN ? (
        <Sign.Button>로그인</Sign.Button>
      ) : (
        <SignUp isInputsFilled={isInputsFilled} info={inputValues} />
      )}
      {type === PAGE.LOGIN && (
        <Sign.OthersiseWrapper onClick={navigateToSignUpPage}>
          계정이 없으신가요 ?<Sign.Otherwise>회원가입</Sign.Otherwise>
        </Sign.OthersiseWrapper>
      )}
    </Sign.Wrapper>
  );
};

export default SignForm;
