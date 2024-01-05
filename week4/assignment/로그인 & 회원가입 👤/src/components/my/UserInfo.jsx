import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { My } from "../../styles/commonStyle";

const UserInfo = () => {
  const location = useLocation();

  const [id, setID] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const path = location.pathname;
      const idFromURL = path.substring(path.lastIndexOf("/") + 1);
      try {
        const data = await axios.get(
          import.meta.env.VITE_BASE_URL + `/api/v1/members/${idFromURL}`
        );
        setID(data.data.username);
        setName(data.data.nickname);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [location]);

  return (
    <My.InfoWrapper>
      <My.InfoText>ID : {id}</My.InfoText>
      <My.InfoText>닉네임 : {name}</My.InfoText>
    </My.InfoWrapper>
  );
};
export default UserInfo;
