import { Sign } from "../styles/commonStyle";
import { useState } from "react";

import loginIcon from "../assets/icons/Message.svg";
import passwordIcon from "../assets/icons/Password.svg";
import UserIcon from "../assets/icons/User.svg";
import { FLAG } from "../constants/constant";
import { useEffect } from "react";
import DoubleCheck from "./DoubleCheck";

const Input = ({ pageType, inputType }) => {
  const [iconSrc, setIconSrc] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");

  const [inputID, setInputID] = useState("");

  const handleChange = (e) => {
    setInputID(e.target.value);
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
        {...(inputType === FLAG.ID && {
          value: inputID,
          onChange: handleChange,
        })}
      />
      {pageType === FLAG.SIGNUP && inputType === FLAG.ID && (
        <DoubleCheck id={inputID} />
      )}
    </Sign.InputWrapper>
  );
};

export default Input;
