import { useAppSelector } from "../../redux/hooks";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import RegisterForm from "../RegisterForm/RegisterForm";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  const { isLoading } = useAppSelector((state) => state.ui);

  return (
    <AppStyled className="app">
      Feisbuk
      <RegisterForm />
      {isLoading && <Loading />}
      <Modal text="Something went wrong" isError={true} />
    </AppStyled>
  );
};

export default App;
