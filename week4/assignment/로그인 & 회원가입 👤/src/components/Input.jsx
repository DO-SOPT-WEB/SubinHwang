import { Sign } from "../styles/commonStyle";
import { useState } from "react";

import loginIcon from "../assets/icons/Message.svg";
import passwordIcon from "../assets/icons/Password.svg";
import UserIcon from "../assets/icons/User.svg";
import { FLAG } from "../constants/constant";
import { useEffect } from "react";

const Input = ({ pageType, inputType }) => {
  const [iconSrc, setIconSrc] = useState("");
  const [placeholderText, setPlaceholderText] = useState("");

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
      <Sign.Input placeholder={placeholderText} />
      {pageType === FLAG.SIGNUP && inputType === FLAG.ID && (
        <Sign.CheckButton>중복확인</Sign.CheckButton>
      )}
    </Sign.InputWrapper>
  );
};

export default Input;
