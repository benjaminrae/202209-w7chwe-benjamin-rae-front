import Button from "../Button/Button";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <AppStyled className="app">
      Feisbuk
      <Button text="Sign up" />
    </AppStyled>
  );
};

export default App;
