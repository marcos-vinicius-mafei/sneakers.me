import { FancyButton } from "./style";

const Button = ({ children, background, color, ...rest }) => {
  return (
    <FancyButton background={background} color={color} {...rest}>
      {children}
    </FancyButton>
  );
};

export default Button;
