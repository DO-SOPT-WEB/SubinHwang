import { Sign } from "../styles/commonStyle";

import loginIcon from "../assets/icons/User.svg";
import passwordIcon from "../assets/icons/Password.svg";

const SignUpPage = () => {
  return (
    <Sign.Wrapper>
      <Sign.Title>회원가입</Sign.Title>
      <Sign.InputWrapper>
        <Sign.InputIcon src={loginIcon}></Sign.InputIcon>
        <Sign.Input placeholder="아이디" />
        <Sign.CheckButton>중복확인</Sign.CheckButton>
      </Sign.InputWrapper>
      <Sign.InputWrapper>
        <Sign.InputIcon src={passwordIcon}></Sign.InputIcon>
        <Sign.Input placeholder="비밀번호" />
      </Sign.InputWrapper>
      <Sign.InputWrapper>
        <Sign.InputIcon src={passwordIcon}></Sign.InputIcon>
        <Sign.Input placeholder="비밀번호 확인" />
      </Sign.InputWrapper>
      <Sign.Button>회원가입</Sign.Button>
    </Sign.Wrapper>
  );
};
export default SignUpPage;
