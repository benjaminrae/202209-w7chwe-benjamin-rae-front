import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Given a Loading component", () => {
  describe("When it is rendered", () => {
    test("Then it should show an animation on the screen with role 'alert' and label 'The page is loading'", () => {
      const animationLabel = "The page is loading";

      render(<Loading />);

      const renderedAnimation = screen.queryByRole("alert", {
        name: animationLabel,
      });

      expect(renderedAnimation).toBeInTheDocument();
    });
  });
});
