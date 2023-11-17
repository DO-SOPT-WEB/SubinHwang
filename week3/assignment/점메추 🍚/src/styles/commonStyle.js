import { styled } from "styled-components";
const centerFlex = `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 800px;
  height: calc(100vh - 70px);
  text-align: center;
`;

export const Quetion = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 100;
`;

export const Answer = styled.div`
  display: flex;
  justify-content: center;

  padding: 20px 0 0;
`;
export const Balloon = styled.div`
  position: relative;
  ${centerFlex}

  margin: 20px;
  padding: 10px;

  width: 200px;
  height: 150px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;

    margin-left: -10px;

    border-width: 10px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.white} transparent transparent
      transparent;
  }

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;

export const BalloonText = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.base};
`;
export const WhiteBox = styled.div`
  position: relative;

  ${centerFlex}

  margin: 20px;
  padding: 10px;

  width: 200px;
  height: 150px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.black};
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;

  border: none;
  border-radius: 20px;

  background: ${({ theme }) => theme.colors.secondary};

  color: ${({ theme }) => theme.colors.white};

  transition: 0.3s;
`;

export const RadioBalloon = styled.label`
  position: relative;

  ${centerFlex}

  width: 200px;
  height: 150px;

  margin: 20px;
  padding: 10px;

  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.white};

  color: ${({ theme }) => theme.colors.black};

  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;

    margin-left: -10px;

    border-width: 10px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.white} transparent transparent
      transparent;
  }

  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + label {
    background: ${({ theme }) => theme.colors.secondary};
  }

  &:checked + label > p {
    color: ${({ theme }) => theme.colors.white};
  }

  &:checked + label::before {
    border-color: ${({ theme }) => theme.colors.secondary} transparent
      transparent transparent;

    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonSection = styled.div`
  position: relative;
  bottom: 50px;

  display: flex;
  justify-content: space-between;

  width: 750px;
`;

export const DisabledNextButton = styled(Button)`
  opacity: 50%;

  cursor: not-allowed;
`;
export const ActiveNextButton = styled(Button)`
  &:hover {
    box-shadow: 0 0 8px 4px ${({ theme }) => theme.colors.secondary};

    transition: 0.3s;
  }
`;
export const PrevButton = styled(Button)`
  background: ${({ theme }) => theme.colors.grey};

  color: ${({ theme }) => theme.colors.darkGrey};

  transition: 0.3s;

  &:hover {
    box-shadow: 0 0 8px 4px ${({ theme }) => theme.colors.grey};

    transition: 0.3s;
  }
`;
