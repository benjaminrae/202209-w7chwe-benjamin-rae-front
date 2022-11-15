import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text: string;
  action?: () => void;
  inverted?: boolean;
}

const Button = ({ text, action, inverted }: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={inverted ? "button button--inverted" : "button"}
      onClick={action}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
