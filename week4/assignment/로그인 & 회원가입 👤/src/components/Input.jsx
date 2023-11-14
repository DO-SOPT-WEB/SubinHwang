import { Sign } from "../styles/commonStyle";
import { useState } from "react";

import loginIcon from "../assets/icons/Message.svg";
import passwordIcon from "../assets/icons/Password.svg";
import UserIcon from "../assets/icons/User.svg";
import { FLAG } from "../constants/constant";
import { useEffect } from "react";
import DoubleCheck from "./DoubleCheck";

const Input = ({ pageType, inputType, onInputChange, isExist, setIsExist }) => {
  const [iconSrc, setIconSrc] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");

  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setIsExist && setIsExist(0);
    setInputValue(e.target.value);
    pageType === FLAG.SIGNUP && onInputChange(inputType, e.target.value);
  };

  useEffect(() => {
    switch (inputType) {
      case FLAG.ID:
        setIconSrc(loginIcon);
        setPlaceholderText("아이디");
        break;
      case FLAG.PW:
        setIconSrc(passwordIcon);
        setPlaceholderText("비밀번호");
        break;
      case FLAG.PWCHECK:
        setIconSrc(passwordIcon);
        setPlaceholderText("비밀번호");
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
      {pageType === FLAG.SIGNUP && inputType === FLAG.ID && (
        <DoubleCheck
          id={inputValue}
          isExist={isExist}
          setIsExist={setIsExist}
        />
      )}
    </Sign.InputWrapper>
  );
};

export default Input;
