import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 1 'Feisbuk'", () => {
      const expectedHeading = {
        level: 1,
        name: "Feisbuk",
      };

      renderWithProviders(<Header />);

      const renderedHeading = screen.queryByRole("heading", expectedHeading);

      expect(renderedHeading).toBeInTheDocument();
    });
  });
});
