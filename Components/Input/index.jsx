import {Container} from "./style"

const Input = ({ label,type, error,register ,name, ...rest}) => {
  return (
    <Container>
      <label className="label" htmlFor={name}>{label}</label>
      <input type={type} {...register(name)} {...rest}/>
      <p className="error">{error}</p>
    </Container>
  );
};

export default Input;
