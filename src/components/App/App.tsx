import { useAppSelector } from "../../redux/hooks";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import RegisterForm from "../RegisterForm/RegisterForm";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  const { isLoading, showModal, isError, modalText } = useAppSelector(
    (state) => state.ui
  );

  return (
    <AppStyled className="app">
      Feisbuk
      <RegisterForm />
      {isLoading && <Loading />}
      {showModal && <Modal isError={isError} text={modalText} />}
    </AppStyled>
  );
};

export default App;
