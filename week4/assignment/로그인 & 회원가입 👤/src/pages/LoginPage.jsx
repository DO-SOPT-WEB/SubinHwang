import { Sign } from "../styles/commonStyle";
import loginIcon from "../assets/icons/User.svg";
import passwordIcon from "../assets/icons/Password.svg";

const LoginPage = () => {
  return (
    <Sign.Wrapper>
      <Sign.Title>로그인</Sign.Title>
      <Sign.InputWrapper>
        <Sign.InputIcon src={loginIcon}></Sign.InputIcon>
        <Sign.Input placeholder="아이디" />
      </Sign.InputWrapper>
      <Sign.InputWrapper>
        <Sign.InputIcon src={passwordIcon}></Sign.InputIcon>
        <Sign.Input placeholder="비밀번호" />
      </Sign.InputWrapper>
      <Sign.Button>로그인</Sign.Button>
      <Sign.OthersiseWrapper>
        계정이 없으신가요 ?<Sign.Otherwise>회원가입</Sign.Otherwise>
      </Sign.OthersiseWrapper>
    </Sign.Wrapper>
  );
};

export default LoginPage;
