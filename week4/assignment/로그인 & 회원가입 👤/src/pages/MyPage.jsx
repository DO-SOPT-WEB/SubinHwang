import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { My } from "../styles/commonStyle";
import profileImg from "../assets/imgs/profile.png";

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [id, setID] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const path = location.pathname;
      const idFromURL = path.substring(path.lastIndexOf("/") + 1);
      try {
        const data = await axios.get(
          `http://3.39.54.196/api/v1/members/${idFromURL}`
        );
        setID(data.data.username);
        setName(data.data.nickname);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [location]);

  const logout = () => {
    navigate("/login");
  };

  return (
    <My.Wrapper>
      <My.Title>마이페이지</My.Title>
      <My.ProfileImg $profileImg={profileImg}></My.ProfileImg>
      <My.InfoWrapper>
        <My.InfoText>ID : {id}</My.InfoText>
        <My.InfoText>닉네임 : {name}</My.InfoText>
      </My.InfoWrapper>
      <My.LogoutButton onClick={logout}>로그아웃</My.LogoutButton>
    </My.Wrapper>
  );
};

export default MyPage;
