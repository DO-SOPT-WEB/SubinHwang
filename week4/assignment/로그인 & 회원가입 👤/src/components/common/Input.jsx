import { useState, useEffect } from "react";
import { Sign } from "../../styles/commonStyle";

import DoubleCheck from "../signup/DoubleCheck";

import { PAGE } from "../../constants/page";
import { INPUT } from "../../constants/input";

import loginIcon from "../../assets/icons/Message.svg";
import passwordIcon from "../..//assets/icons/Password.svg";
import UserIcon from "../../assets/icons/User.svg";

const Input = ({
  pageType,
  inputType,
  onInputChange,
  isAvailable,
  setIsAvailable,
}) => {
  const [iconSrc, setIconSrc] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setIsAvailable && setIsAvailable(0);
    setInputValue(e.target.value);
    onInputChange(inputType, e.target.value);
  };

  useEffect(() => {
    switch (inputType) {
      case INPUT.ID:
        setIconSrc(loginIcon);
        setPlaceholderText("아이디");
        break;
      case INPUT.PW:
        setIconSrc(passwordIcon);
        setPlaceholderText("비밀번호");
        break;
      case INPUT.PWCHECK:
        setIconSrc(passwordIcon);
        setPlaceholderText("비밀번호 확인");
        break;
      default:
        setIconSrc(UserIcon);
        setPlaceholderText("닉네임");
        break;
    }
  }, [pageType, inputType]);

  return (
    <Sign.InputWrapper>
      <img src={iconSrc} />
      <Sign.Input
        placeholder={placeholderText}
        value={inputValue}
        onChange={handleChange}
      />
      {pageType === PAGE.SIGNUP && inputType === INPUT.ID && (
        <DoubleCheck
          id={inputValue}
          isAvailable={isAvailable}
          setIsAvailable={setIsAvailable}
        />
      )}
    </Sign.InputWrapper>
  );
};

export default Input;
