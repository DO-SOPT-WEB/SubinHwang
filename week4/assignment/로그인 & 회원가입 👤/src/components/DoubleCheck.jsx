import axios from "axios";
import { Sign } from "../styles/commonStyle";

const DoubleCheck = ({ id, isExist, setIsExist }) => {
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
