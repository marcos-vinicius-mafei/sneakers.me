import Head from "next/head";
import LoginForm from "../Components/LoginForm";
import { FormPage} from "../styles/formPage";

const Login = () => {
  return (
    <FormPage>
      <Head>
        <title>Login</title>
      </Head>
      <h2>Log <a>ME</a> In</h2>
      <LoginForm />
    </FormPage>
  );
};

export default Login;
