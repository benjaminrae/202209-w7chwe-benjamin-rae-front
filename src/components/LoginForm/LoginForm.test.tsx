import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show heading level 2 'Log in to Feisbuk', two inputs 'Username' and 'Password' and a 'Login' button", () => {
      const expectedHeading = {
        level: 2,
        name: "Log in to Feisbuk",
      };
      const usernameLabel = /username/i;
      const passwordLabel = /password/i;
      const loginButtonText = /login/i;

      renderWithProviders(<LoginForm />);

      const renderedHeading = screen.queryByRole("heading", expectedHeading);
      const usernameInput = screen.queryByRole("textbox", {
        name: usernameLabel,
      });
      const passwordInput = screen.getByLabelText(passwordLabel);
      const loginButton = screen.queryByRole("button", {
        name: loginButtonText,
      });

      expect(renderedHeading).toBeInTheDocument();
      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(loginButton).toBeInTheDocument();
    });
  });
});
