import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
}

const Button = ({ text, action }: ButtonProps): JSX.Element => {
  return <ButtonStyled onClick={action}>{text}</ButtonStyled>;
};

export default Button;
