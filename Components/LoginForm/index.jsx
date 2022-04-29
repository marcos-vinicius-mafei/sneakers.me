import Input from "../Input";
import Button from "../Button";
import { FancyForm } from "../SignUpForm/style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const LoginForm = () => {
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email is required")
      .max(100, "The max length is 100")
      .email("Invalid email")
      .min(3, "Min is 3 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Min is 6 characters"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <FancyForm onSubmit={handleSubmit(submitForm)}>
      <Input
        label="Your email"
        type="email"
        register={register}
        name="email"
        error={errors.email?.message}
        placeholder="Best email"
      />
      <Input
        label="Password"
        type="password"
        register={register}
        name="password"
        error={errors.password?.message}
        placeholder="Strongest password"
      />
      <Button
        type="submit"
        background="var(--orange)"
        color="var(--light)"
        className="btn--form"
      >
        Login
      </Button>
      <Button
        background="var(--light)"
        color="var(--orange)"
        className="btn--form google"
        onClick={(e) => {
          e.preventDefault();
          console.log("hello");
        }}
      >
        Login with <FcGoogle size={35} />
      </Button>
      <p className="account">
        Don't have an account?{" "}
        <Link href="/signup">
          <a>Sign Up!</a>
        </Link>
      </p>
    </FancyForm>
  );
};

export default LoginForm;
