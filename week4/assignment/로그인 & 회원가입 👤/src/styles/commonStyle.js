import { styled } from "styled-components";

const InputWrapper = styled.div`
  position: relative;

  width: 90%;
  height: 60px;

  display: flex;
  gap: 10px;

  padding: 0 20px;

  border-radius: 16px;

  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

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

const SignUpButton = styled(Button)`
  background-color: ${({ $isInputsFilled, theme }) =>
    $isInputsFilled === true ? theme.colors.darkBlue : theme.colors.normalGrey};
  color: ${({ theme }) => theme.colors.white};
  cursor: ${({ $isInputsFilled }) =>
    $isInputsFilled === true ? "cusor" : "not-allowed"};
`;

const CheckButton = styled(Button)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 80px;
  height: 40px;

  font-size: ${({ theme }) => theme.fontSize.s};
  background-color: ${({ $isAvailable, theme }) =>
    $isAvailable === 1
      ? theme.colors.red
      : $isAvailable === 2
      ? theme.colors.green
      : theme.colors.darkBlue};
`;

const ProfileImg = styled.div`
  width: 200px;
  height: 200px;

  border-radius: 100%;

  background-image: ${({ $profileImg }) => `url(${$profileImg})`};
  background-size: cover;
`;

const InfoText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`;

const LogoutButton = styled(Button)`
  width: 100px;
  height: 40px;

  margin-top: 100px;
`;

export const Sign = {
  InputWrapper,
  Input,
  Wrapper,
  Button,
  SignUpButton,
  CheckButton,
};

export const My = {
  Wrapper,
  ProfileImg,
  InfoText,
  InfoWrapper,
  LogoutButton,
};
