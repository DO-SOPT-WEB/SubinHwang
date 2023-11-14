import { styled } from "styled-components";
import loginIcon from "../assets/icons/User.svg";
import passwordIcon from "../assets/icons/Password.svg";

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkBlue};
`;
const InputWrapper = styled.div`
  width: 90%;
  height: 60px;

  display: flex;
  gap: 10px;
  padding: 0 20px;
  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.lightBlue};
`;
const InputIcon = styled.img``;
const Input = styled.input`
  flex-grow: 1;

  border-radius: 16px;
  outline: none;

  background-color: ${({ theme }) => theme.colors.lightBlue};

  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: "Pretendard-SemiBold";
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;
  max-width: 500px;
  height: 100vh;

  margin: 0 auto;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.white};
`;
const Button = styled.button`
  width: 90%;
  height: 60px;

  margin: 0 auto;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.darkBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
`;
const OthersiseWrapper = styled.div`
  display: flex;
  gap: 5px;

  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 500;

  cursor: pointer;
`;
const Otherwise = styled.span`
  font-weight: 700;
`;
const LoginPage = () => {
  return (
    <>
      <Wrapper>
        <Title>로그인</Title>
        <InputWrapper>
          <InputIcon src={loginIcon}></InputIcon>
          <Input placeholder="아이디" />
        </InputWrapper>
        <InputWrapper>
          <InputIcon src={passwordIcon}></InputIcon>
          <Input placeholder="비밀번호" />
        </InputWrapper>
        <Button>로그인</Button>
        <OthersiseWrapper>
          계정이 없으신가요 ?<Otherwise>회원가입</Otherwise>
        </OthersiseWrapper>
      </Wrapper>
    </>
  );
};

export default LoginPage;
