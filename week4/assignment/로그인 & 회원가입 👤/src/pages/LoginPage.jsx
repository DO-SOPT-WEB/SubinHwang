import SignForm from "../components/common/SignForm";
import { PAGE } from "../constants/page";

const LoginPage = () => {
  return <SignForm type={PAGE.LOGIN} />;
};

export default LoginPage;
