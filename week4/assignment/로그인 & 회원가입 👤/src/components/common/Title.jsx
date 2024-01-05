import styled from "styled-components";
import { PAGE } from "../../constants/page";

const Title = ({ page }) => {
  switch (page) {
    case PAGE.LOGIN:
      return <TitleText>로그인</TitleText>;
    case PAGE.SIGNUP:
      return <TitleText>회원가입</TitleText>;
    case PAGE.MYPAGE:
      return <TitleText>마이페이지</TitleText>;
  }
};

export default Title;

const TitleText = styled.h1`
  margin-bottom: 20px;

  font-size: ${({ theme }) => theme.fontSize.l};
  color: ${({ theme }) => theme.colors.darkBlue};
`;
