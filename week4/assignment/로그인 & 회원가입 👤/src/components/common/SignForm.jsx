import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Sign } from "../../styles/commonStyle";
import { INPUT } from "../../constants/input";
import { PAGE } from "../../constants/page";

import Input from "./Input";
import SignUp from "../signup/SingUp";
import Login from "../login/Login";
import { CHECK } from "../../constants/check";

const SignForm = ({ type }) => {
  const navigate = useNavigate();

  const navigateToSignUpPage = () => {
    navigate("/signup");
  };

  const [isAvailable, setIsAvailable] = useState(CHECK.NOT_CHECKED);
  const [isInputsFilled, setIsInputsFilled] = useState(false);
  const [inputValues, setInputValues] = useState({
    [INPUT.ID]: "",
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
      return isAvailable === CHECK.NOT_EXIST;
    };

    const validatePasswordCheck = () => {
      return inputValues[INPUT.PW] === inputValues[INPUT.PWCHECK];
    };

    const isAllValid =
      validateInputs() & validateDoubleCheck() & validatePasswordCheck();

    isAllValid ? setIsInputsFilled(true) : setIsInputsFilled(false);
  }, [inputValues, isAvailable]);

  return (
    <Sign.Wrapper>
      <Sign.Title>{type === PAGE.LOGIN ? "로그인" : "회원가입"}</Sign.Title>
      <Input
        pageType={type}
        inputType={INPUT.ID}
        onInputChange={handleInputChange}
        isAvailable={isAvailable}
        setIsAvailable={setIsAvailable}
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
        <Login info={inputValues} />
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
