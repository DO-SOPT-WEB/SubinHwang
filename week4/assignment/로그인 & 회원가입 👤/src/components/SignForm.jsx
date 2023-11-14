import { Sign } from "../styles/commonStyle";
import { FLAG } from "../constants/constant";
import Input from "./Input";

const SignForm = ({ type }) => {
  return (
    <Sign.Wrapper>
      <Sign.Title>{type === FLAG.LOGIN ? "로그인" : "회원가입"}</Sign.Title>
      <Input pageType={type} inputType={FLAG.ID}></Input>
      <Input pageType={type} inputType={FLAG.PW}></Input>
      {type === FLAG.SIGNUP && (
        <Input pageType={type} inputType={FLAG.PWCHECK}></Input>
      )}
      <Sign.Button>{type === FLAG.LOGIN ? "로그인" : "회원가입"}</Sign.Button>
      {type === FLAG.LOGIN && (
        <Sign.OthersiseWrapper>
          계정이 없으신가요 ?<Sign.Otherwise>회원가입</Sign.Otherwise>
        </Sign.OthersiseWrapper>
      )}
    </Sign.Wrapper>
  );
};

export default SignForm;
