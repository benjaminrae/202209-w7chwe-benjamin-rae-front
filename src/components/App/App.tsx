import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import useToken from "../../hooks/useToken/useToken";
import HomePage from "../../pages/HomePage/HomePage";
import NotFoundPage from "../../pages/NotFoundPage/NotFoundPage";
import ProfilesPage from "../../pages/ProfilesPage/ProfilesPage";
import { useAppSelector } from "../../redux/hooks";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import LoginForm from "../LoginForm/LoginForm";
import Modal from "../Modal/Modal";
import ProfileList from "../ProfileList/ProfileList";
import RegisterForm from "../RegisterForm/RegisterForm";
import AppStyled from "./AppStyled";

const App = (): JSX.Element => {
  const { isLoading, showModal, isError, modalText } = useAppSelector(
    (state) => state.ui
  );

  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <AppStyled className="app">
      <Header />
      <Suspense fallback={<Loading />} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/profiles" element={<ProfilesPage />} />
        <Route path="/test" element={<ProfileList />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      {isLoading && <Loading />}
      {showModal && <Modal isError={isError} text={modalText} />}
    </AppStyled>
  );
};

export default App;
