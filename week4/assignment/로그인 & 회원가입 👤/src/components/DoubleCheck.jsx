import { useState } from "react";
import { Sign } from "../styles/commonStyle";
import axios from "axios";

const DoubleCheck = ({ id }) => {
  const [isExist, setIsExist] = useState(0); //기본 값은 0, 중복이라면 1, 중복이 아니라면 2

  const checkIdExist = async () => {
    const data = await axios.get(
      `http://3.39.54.196/api/v1/members/check?username=${id}`
    );
    data.data.isExist ? setIsExist(1) : setIsExist(2);
  };

  return (
    <Sign.CheckButton onClick={checkIdExist} $isExist={isExist}>
      중복확인
    </Sign.CheckButton>
  );
};

export default DoubleCheck;
