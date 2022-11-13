import { Suspense, useEffect, lazy } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import useToken from "../../hooks/useToken/useToken";
import HomePage from "../../pages/HomePage/HomePage";
import { useAppSelector } from "../../redux/hooks";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";
import LoginForm from "../LoginForm/LoginForm";
import Modal from "../Modal/Modal";
import RegisterForm from "../RegisterForm/RegisterForm";
import AppStyled from "./AppStyled";

const ProfilesPage = lazy(
  () => import("../../pages/ProfilesPage/ProfilesPage")
);

const NotFoundPage = lazy(
  () => import("../../pages/NotFoundPage/NotFoundPage")
);

const App = (): JSX.Element => {
  const { isLoading, showModal, isError, modalText } = useAppSelector(
    (state) => state.ui
  );
  const { isLogged } = useAppSelector((state) => state.user);

  const { getToken } = useToken();

  const navigate = useNavigate();

  useEffect(() => {
    getToken();
  }, [getToken, isLogged, navigate]);

  return (
    <AppStyled className="app">
      <Header />
      <Suspense fallback={<Loading />} />
      <Routes>
        <Route
          path="/"
          element={isLogged ? <Navigate to="/profiles" /> : <HomePage />}
        />
        <Route
          path="/register"
          element={isLogged ? <Navigate to="/profiles" /> : <RegisterForm />}
        />
        <Route
          path="/login"
          element={isLogged ? <Navigate to="/profiles" /> : <LoginForm />}
        />
        <Route
          path="/profiles"
          element={!isLogged ? <Navigate to="/" /> : <ProfilesPage />}
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      {isLoading && <Loading />}
      {showModal && <Modal isError={isError} text={modalText} />}
    </AppStyled>
  );
};

export default App;
