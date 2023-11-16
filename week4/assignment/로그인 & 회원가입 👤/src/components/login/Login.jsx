import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sign } from "../../styles/commonStyle";
import axios from "axios";

import { INPUT } from "../../constants/input";

import Toast from "../common/Toast";

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
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <>
      <Sign.Button onClick={RequestLogin}>로그인</Sign.Button>
      {toast && <Toast setToast={setToast} message={errorMessage} />}
    </>
  );
};
export default Login;
