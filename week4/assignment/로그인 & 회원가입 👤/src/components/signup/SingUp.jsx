import { useNavigate } from "react-router-dom";
import { Sign } from "../../styles/commonStyle";
import axios from "axios";

import { INPUT } from "../../constants/input";

const SignUp = ({ isInputsFilled, info }) => {
  const requestData = {
    username: info[INPUT.ID],
    password: info[INPUT.PW],
    nickname: info[INPUT.NAME],
  };

  const navigate = useNavigate();

  const RequestSignUp = async () => {
    await axios
      .post(import.meta.env.VITE_BASE_URL + "/api/v1/members", requestData)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Sign.SignUpButton onClick={RequestSignUp} $isInputsFilled={isInputsFilled}>
      회원가입
    </Sign.SignUpButton>
  );
};
export default SignUp;
