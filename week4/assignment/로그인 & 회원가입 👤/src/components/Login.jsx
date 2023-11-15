import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { Sign } from "../styles/commonStyle";
import axios from "axios";

import { INPUT } from "../constants/input";

import Toast from "./Toast";

const Login = ({ info }) => {
  const requestData = {
    username: info[INPUT.ID],
    password: info[INPUT.PW],
  };

  const [toast, setToast] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const RequestLogin = async () => {
    await axios
      .post("http://3.39.54.196/api/v1/members/sign-in", requestData)
      .then((response) => {
        navigate(`/mypage/${response.data.id}`);
      })
      .catch((error) => {
        console.error(error);
        setToast(true);
        setErrorMessage(error.message);
      });
  };

  return (
    <>
      <Sign.Button onClick={RequestLogin}>로그인</Sign.Button>
      {toast &&
        createPortal(
          <Toast toast={toast} setToast={setToast} message={errorMessage} />,
          document.body
        )}
    </>
  );
};
export default Login;
