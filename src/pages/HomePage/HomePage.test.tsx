import { screen } from "@testing-library/react";

import renderWithProviders from "../../testUtils/renderWithProviders";
import HomePage from "./HomePage";

describe("Give the page HomePage", () => {
  describe("When it is rendered", () => {
    test("Then it should show two heading level 2s 'Meet friends, make enemies' and 'Sign up for Feisbuk'", () => {
      const ctaTitle = /meet friends, make enemies/i;
      const formTitle = {
        level: 2,
        neame: "Sign up for Feisbuk",
      };

      renderWithProviders(<HomePage />);

      const renderedCtaTitle = screen.queryByText(ctaTitle);
      const renderedFormTitle = screen.queryByRole("heading", formTitle);

      expect(renderedCtaTitle).toBeInTheDocument();
      expect(renderedFormTitle).toBeInTheDocument();
    });
  });
});
