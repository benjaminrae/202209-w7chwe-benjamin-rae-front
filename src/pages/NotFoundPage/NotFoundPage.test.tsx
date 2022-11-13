import { renderHook, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useLocation } from "react-router";
import { BrowserRouter } from "react-router-dom";
import renderWithProviders from "../../testUtils/renderWithProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given the page NotFoundPage", () => {
  const homeButtonText = /home/i;

  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 'There aren't any friends here' and a button 'Home", () => {
      const expectedHeading = {
        level: 2,
        name: "There aren't any friends here",
      };

      renderWithProviders(<NotFoundPage />);

      const renderedHeading = screen.queryByRole("heading", expectedHeading);
      const renderedHomeButton = screen.queryByRole("button", {
        name: homeButtonText,
      });

      expect(renderedHeading).toBeInTheDocument();
      expect(renderedHomeButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the 'Home' button is clicked", () => {
    test("Then the user should navigate to /", async () => {
      const expectedPath = "/";

      renderWithProviders(<NotFoundPage />);

      const renderedHomeButton = screen.queryByRole("button", {
        name: homeButtonText,
      });

      await userEvent.click(renderedHomeButton!);

      const {
        result: {
          current: { pathname },
        },
      } = renderHook(() => useLocation(), { wrapper: BrowserRouter });

      expect(pathname).toBe(expectedPath);
    });
  });
});
