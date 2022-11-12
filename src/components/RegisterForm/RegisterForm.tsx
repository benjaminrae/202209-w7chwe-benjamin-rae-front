import React, { useState } from "react";
import { ValidationError } from "joi";
import registerFormSchema from "../../schemas/registerFormSchema";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";
import useUser from "../../hooks/useUser";
export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const initialRegisterFormData: RegisterFormData = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterForm = () => {
  const [registerFormData, setRegisterFormData] = useState(
    initialRegisterFormData
  );
  const [error, setError] = useState("");

  const { registerUser } = useUser();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRegisterFormData((previousFormData) => ({
      ...previousFormData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await registerFormSchema.validateAsync(registerFormData, {
        abortEarly: false,
      });
      await registerUser(registerFormData);
      setError("");
    } catch (error: unknown) {
      if (error instanceof ValidationError) {
        setError(error.details.map((error) => error.message).join("\n"));
      }
    }
  };

  return (
    <RegisterFormStyled
      className="register-form form"
      onSubmit={handleFormSubmit}
    >
      <h2 className="register-form__title form__title">Sign up for Feisbuk</h2>
      <div className="register-form__form-group form__group">
        <label htmlFor="username" className="register-form__label form__label">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="register-form__input form__input"
          min="5"
          onChange={handleFormChange}
          value={registerFormData.username}
          autoComplete="off"
        />
      </div>
      <div className="register-form__form-group form__group">
        <label htmlFor="email" className="register-form__label form__label">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="register-form__input form__input"
          onChange={handleFormChange}
          value={registerFormData.email}
          autoComplete="off"
        />
      </div>
      <div className="register-form__form-group form__group">
        <label htmlFor="password" className="register-form__label form__label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="register-form__input form__input"
          min="8"
          onChange={handleFormChange}
          value={registerFormData.password}
          autoComplete="off"
        />
      </div>
      <div className="register-form__form-group form__group">
        <label
          htmlFor="confirmPassword"
          className="register-form__label form__label"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="register-form__input form__input"
          min="8"
          onChange={handleFormChange}
          value={registerFormData.confirmPassword}
          autoComplete="off"
        />
      </div>

      <Button text="Sign up" />

      {error && (
        <div className="register-form__error form__error" data-test-id="error">
          There was an error: {error}
        </div>
      )}
    </RegisterFormStyled>
  );
};

export default RegisterForm;
