import { useEffect } from "react";
import { styled } from "styled-components";
import { createPortal } from "react-dom";

const Toast = ({ toast, setToast, message }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToast(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [toast, setToast]);

  return createPortal(
    <ToastWrapper>
      <ToastMessage>{message}</ToastMessage>
    </ToastWrapper>,
    document.body
  );
};

export default Toast;

const ToastWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;

  width: fit-content;

  margin: 0 auto;
  padding: 10px 30px;

  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.lightBlue};

  text-align: center;
`;

const ToastMessage = styled.p`
  color: ${({ theme }) => theme.colors.darkBlue};
`;
