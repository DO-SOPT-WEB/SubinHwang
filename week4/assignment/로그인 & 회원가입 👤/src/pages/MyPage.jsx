import { My } from "../styles/commonStyle";
import profileImg from "../assets/imgs/profile.png";

const MyPage = () => {
  return (
    <My.Wrapper>
      <My.Title>마이페이지</My.Title>
      <My.ProfileImg $profileImg={profileImg}></My.ProfileImg>
      <My.InfoWrapper>
        <My.InfoText>ID : </My.InfoText>
        <My.InfoText>닉네임 : </My.InfoText>
      </My.InfoWrapper>
      <My.LogoutButton>로그아웃</My.LogoutButton>
    </My.Wrapper>
  );
};

export default MyPage;
