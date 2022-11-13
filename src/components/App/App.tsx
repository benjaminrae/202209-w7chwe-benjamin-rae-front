import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router";
import { useAppSelector } from "../../redux/hooks";
import Loading from "../Loading/Loading";
import LoginForm from "../LoginForm/LoginForm";
import Modal from "../Modal/Modal";
import RegisterForm from "../RegisterForm/RegisterForm";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  const { isLoading, showModal, isError, modalText } = useAppSelector(
    (state) => state.ui
  );

  return (
    <AppStyled className="app">
      <Suspense fallback={<Loading />} />
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
      {isLoading && <Loading />}
      {showModal && <Modal isError={isError} text={modalText} />}
    </AppStyled>
  );
};

export default App;
