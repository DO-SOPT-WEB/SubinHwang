import axios from "axios";
import { CHECK } from "../../constants/check";
import { Sign } from "../../styles/commonStyle";

const DoubleCheck = ({ id, isAvailable, setIsAvailable }) => {
  const checkIdExist = async () => {
    const data = await axios.get(
      import.meta.env.VITE_BASE_URL + `/api/v1/members/check?username=${id}`
    );
    data.data.isExist
      ? setIsAvailable(CHECK.EXIST)
      : setIsAvailable(CHECK.NOT_EXIST);
  };

  return (
    <Sign.CheckButton onClick={checkIdExist} $isAvailable={isAvailable}>
      중복확인
    </Sign.CheckButton>
  );
};

export default DoubleCheck;
