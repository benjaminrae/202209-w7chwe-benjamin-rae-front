import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtils/renderWithProviders";
import RegisterForm from "./RegisterForm";

describe("Given the component RegisterForm", () => {
  const usernameLabel = /username/i;
  const emailLabel = /email/i;
  const passsowrdLabel = /^password/i;
  const confirmLabel = /confirm password/i;
  const buttonText = /sign up/i;

  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 'Sign up for Feisbuk' and a form with inputs Username, Email, Password, ConfirmPassword and a Sign up button", () => {
      const formHeading = {
        level: 2,
        name: "Sign up for Feisbuk",
      };

      renderWithProviders(<RegisterForm />);

      const renderedHeading = screen.queryByRole("heading", formHeading);
      const usernameInput = screen.queryByRole("textbox", {
        name: usernameLabel,
      });
      const emailInput = screen.queryByRole("textbox", {
        name: emailLabel,
      });
      const passwordInput = screen.queryByLabelText(passsowrdLabel);
      const confirmInput = screen.queryByLabelText(confirmLabel);
      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      expect(renderedHeading).toBeInTheDocument();
      expect(usernameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(confirmInput).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user types in the username 'admin', password 'admin123' and confirm 'admin123' and clicks 'Sign up'", () => {
    test("Then a text with '\"email\" is not allowed to be empty' should show on the screen", async () => {
      const userInput = {
        username: "admin",
        password: "admin123",
        confirmPassword: "admin123",
      };
      const expectedErrorText = /"email" is not allowed to be empty/i;

      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.queryByRole("textbox", {
        name: usernameLabel,
      });
      const passwordInput = screen.queryByLabelText(passsowrdLabel);
      const confirmInput = screen.queryByLabelText(confirmLabel);
      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      await userEvent.type(usernameInput!, userInput.username);
      await userEvent.type(passwordInput!, userInput.password);
      await userEvent.type(confirmInput!, userInput.confirmPassword);
      await userEvent.click(renderedButton!);

      const renderedError = screen.queryByText(expectedErrorText);

      expect(renderedError).toBeInTheDocument();
    });
  });
});
