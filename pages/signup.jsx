import Head from "next/head";
import SignUpForm from "../Components/SignUpForm";
import { FormPage} from "../styles/formPage";

const Signup = () => {
  return (
    <FormPage>
      <Head>
        <title>Sign Up</title>
      </Head>
      <h2>Sign <a>ME</a> Up</h2>
      <SignUpForm />
    </FormPage>
  );
};

export default Signup;
