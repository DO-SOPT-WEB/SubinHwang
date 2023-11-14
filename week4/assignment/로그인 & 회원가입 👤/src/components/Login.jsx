import { useNavigate } from "react-router-dom";
import { Sign } from "../styles/commonStyle";
import axios from "axios";

import { INPUT } from "../constants/input";

const Login = ({ info }) => {
  const requestData = {
    username: info[INPUT.ID],
    password: info[INPUT.PW],
  };

  const navigate = useNavigate();

  const RequestLogin = async () => {
    await axios
      .post("http://3.39.54.196/api/v1/members/sign-in", requestData)
      .then((response) => {
        navigate(`/mypage/${response.data.id}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return <Sign.Button onClick={RequestLogin}>로그인</Sign.Button>;
};
export default Login;
