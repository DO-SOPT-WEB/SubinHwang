import SignForm from "../components/SignForm";
import { PAGE } from "../constants/page";

const LoginPage = () => {
  return <SignForm type={PAGE.LOGIN} />;
};

export default LoginPage;
