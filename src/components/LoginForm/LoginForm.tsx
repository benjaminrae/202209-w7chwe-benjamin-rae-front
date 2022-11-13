import { useState } from "react";
import { Link } from "react-router-dom";
import { ValidationError } from "joi";
import useUser, { LoginFormData } from "../../hooks/useUser/useUser";
import loginFormSchema from "../../schemas/loginFormSchema";
import Button from "../Button/Button";
import LoginFormStyled from "./LoginFormStyled";

const initialFormData: LoginFormData = {
  username: "",
  password: "",
};

const LoginForm = () => {
  const [loginFormData, setLoginFormData] = useState(initialFormData);
  const [error, setError] = useState("");

  const { loginUser } = useUser();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await loginFormSchema.validateAsync(loginFormData, {
        abortEarly: false,
      });
      await loginUser(loginFormData);
      setError("");
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        setError(error.details.map((error) => error.message).join("\n"));
      }
    }
  };

  return (
    <LoginFormStyled className="login-form form" onSubmit={handleFormSubmit}>
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

      <span>
        Don't have an account?{" "}
        <Link className="form__link" to="/register">
          Register here
        </Link>
      </span>

      {error && (
        <div className="register-form__error form__error" data-test-id="error">
          There was an error: {error}
        </div>
      )}
    </LoginFormStyled>
  );
};

export default LoginForm;
