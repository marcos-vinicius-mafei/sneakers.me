import Input from "../Input";
import Button from "../Button";
import { FancyForm } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {FcGoogle} from "react-icons/fc"

const SignUpForm = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .max(100, "The max length is 100")
      .min(3, "Min is 3 characters"),
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
    confirmPass: yup.string().required("Confirm your password").oneOf([yup.ref("password")],"Passwords must match")
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const submitForm = (data) =>{
    console.log(data)
  }

  return (
    <FancyForm onSubmit={handleSubmit(submitForm)}>
      <Input label="Your name" type="text" register={register} name="name" error={errors.name?.message} placeholder="Best name"/>
      <Input label="Your email" type="email" register={register} name="email" error={errors.email?.message} placeholder="Best email"/>
      <Input
        label="Password"
        type="password"
        register={register}
        name="password"
        error={errors.password?.message}
        placeholder="Strongest password"
      />
      <Input
        label="Confirm password"
        type="password"
        register={register}
        name="confirmPass"
        error={errors.confirmPass?.message}
        placeholder="Password"
      />
      <Button type="submit" background="var(--orange)" color="var(--light)" className="btn--form">
        Sign Up
      </Button>
      <Button background="var(--light)" color="var(--orange)" className="btn--form google" onClick={(e)=>{e.preventDefault();
        console.log("hello")}}>
            Sign Up with <FcGoogle size={35}/>
      </Button>
    </FancyForm>
  );
};

export default SignUpForm;