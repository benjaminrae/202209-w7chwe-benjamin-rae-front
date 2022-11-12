import Loading from "../Loading/Loading";
import RegisterForm from "../RegisterForm/RegisterForm";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  return (
    <AppStyled className="app">
      Feisbuk
      <RegisterForm />
      <Loading />
    </AppStyled>
  );
};

export default App;
