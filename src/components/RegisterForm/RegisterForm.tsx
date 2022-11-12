import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

export interface RegisterFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  return (
    <RegisterFormStyled className="register-form form">
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
        />
      </div>

      <Button text="Sign up" />
    </RegisterFormStyled>
  );
};

export default RegisterForm;
