import SignForm from "../components/SignForm";
import { FLAG } from "../constants/constant";

const LoginPage = () => {
  return <SignForm type={FLAG.LOGIN} />;
};

export default LoginPage;
