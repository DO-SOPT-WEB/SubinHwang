import { styled } from "styled-components";

const Wrapper = styled.div`
  height: 1rem;
  width: 90%;
  margin-bottom: 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const Progress = styled.div`
  height: 1rem;
  width: ${({ page }) => page * 33.3}%;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.secondary};
  transition: width 0.5s ease;
`;

export default function ProgressBar({ page }) {
  return (
    <Wrapper>
      <Progress page={page} />
    </Wrapper>
  );
}
