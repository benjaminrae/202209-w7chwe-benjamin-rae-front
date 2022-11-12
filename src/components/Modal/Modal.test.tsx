import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When it is rendered with text 'Something went wrong' and isError true", () => {
    test("Then it should show the texts 'Oops!', 'Something went wrong' and a close button", () => {
      const modalText = "Something went wrong";
      const expectedModalTitle = "Oops!";
      const buttonText = "Close";

      render(<Modal isError={true} text={modalText} />);

      const title = screen.queryByText(expectedModalTitle);
      const renderedModalText = screen.queryByText(modalText);
      const renderedButton = screen.queryByRole("button", { name: buttonText });

      expect(title).toBeInTheDocument();
      expect(renderedModalText).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered with text 'You updated your profile' and isError false", () => {
    test("Then it should show the texts 'Success!', 'You updated your profile'", () => {
      const modalText = "You updated your profile";
      const expectedModalTitle = "Success!";

      render(<Modal isError={false} text={modalText} />);

      const title = screen.queryByText(expectedModalTitle);
      const renderedModalText = screen.queryByText(modalText);

      expect(title).toBeInTheDocument();
      expect(renderedModalText).toBeInTheDocument();
    });
  });
});
