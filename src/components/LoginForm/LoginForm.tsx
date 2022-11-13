import { useState } from "react";
import { LoginFormData } from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const initialFormData: LoginFormData = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState(initialFormData);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <LoginFormStyled className="login-form form">
      <h2 className="login-form__title form__title">Log in to Feisbuk</h2>
      <div className="login-form__form-group form__group">
        <label htmlFor="username" className="login-form__label form__label">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="login-form__input form__input"
          min="5"
          onChange={handleFormChange}
          value={loginFormData.username}
          autoComplete="off"
        />
      </div>

      <div className="login-form__form-group form__group">
        <label htmlFor="password" className="login-form__label form__label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="login-form__input form__input"
          min="8"
          onChange={handleFormChange}
          value={loginFormData.password}
          autoComplete="off"
        />
      </div>

      <Button text="Login" />
    </LoginFormStyled>
  );
};

export default LoginForm;
