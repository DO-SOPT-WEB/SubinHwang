import { Button } from "../../styles/globalStyle";
import { styled } from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const Title = styled.h1`
  font-size: 1.8rem;
`;
export default function Header({ isTypeSelectPage, restart }) {
  return (
    <HeaderWrapper>
      <Title>오늘의 점메추</Title>
      {!isTypeSelectPage && <Button onClick={() => restart()}>처음으로</Button>}
    </HeaderWrapper>
  );
}
