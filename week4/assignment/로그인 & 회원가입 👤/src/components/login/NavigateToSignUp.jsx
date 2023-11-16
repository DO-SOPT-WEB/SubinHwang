import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NavigateToSignUp = () => {
  const navigate = useNavigate();

  const navigateToSignUpPage = () => {
    navigate("/signup");
  };
  return (
    <NavWrapper onClick={navigateToSignUpPage}>
      계정이 없으신가요 ?<NavText>회원가입</NavText>
    </NavWrapper>
  );
};

export default NavigateToSignUp;

const NavWrapper = styled.div`
  display: flex;
  gap: 5px;

  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 500;

  cursor: pointer;
`;

const NavText = styled.span`
  font-weight: 700;
`;
