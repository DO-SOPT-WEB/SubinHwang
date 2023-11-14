import { useNavigate } from "react-router-dom";
import { My } from "../styles/commonStyle";
import profileImg from "../assets/imgs/profile.png";
import UserInfo from "../components/UserInfo";

const MyPage = () => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
  };

  return (
    <My.Wrapper>
      <My.Title>마이페이지</My.Title>
      <My.ProfileImg $profileImg={profileImg}></My.ProfileImg>
      <UserInfo />
      <My.LogoutButton onClick={logout}>로그아웃</My.LogoutButton>
    </My.Wrapper>
  );
};

export default MyPage;
