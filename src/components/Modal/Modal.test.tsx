import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { hideModalActionCreator } from "../../redux/features/uiSlice/uiSlice";
import renderWithProviders from "../../testUtils/renderWithProviders";
import Modal from "./Modal";

const mockDispatch = jest.fn();

jest.mock("../../redux/hooks", () => ({
  ...jest.requireActual("../../redux/hooks"),
  useAppDispatch: () => mockDispatch,
}));

describe("Given a Modal component", () => {
  describe("When it is rendered with text 'Something went wrong' and isError true", () => {
    const buttonText = "Close";
    const modalText = "Something went wrong";

    test("Then it should show the texts 'Oops!', 'Something went wrong' and a close button", () => {
      const expectedModalTitle = "Oops!";

      renderWithProviders(<Modal isError={true} text={modalText} />);

      const title = screen.queryByText(expectedModalTitle);
      const renderedModalText = screen.queryByText(modalText);
      const renderedButton = screen.queryByRole("button", { name: buttonText });

      expect(title).toBeInTheDocument();
      expect(renderedModalText).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
    });

    test("And then dispatch should be invoked with a close modal action when Close is clicked", async () => {
      renderWithProviders(<Modal isError={true} text={modalText} />);
      debugger;
      const renderedButton = screen.queryByRole("button", {
        name: buttonText,
      });

      await userEvent.click(renderedButton!);

      expect(mockDispatch).toHaveBeenCalledWith(hideModalActionCreator());
    });
  });

  describe("When it is rendered with text 'You updated your profile' and isError false", () => {
    test("Then it should show the texts 'Success!', 'You updated your profile'", () => {
      const modalText = "You updated your profile";
      const expectedModalTitle = "Success!";

      renderWithProviders(<Modal isError={false} text={modalText} />);

      const title = screen.queryByText(expectedModalTitle);
      const renderedModalText = screen.queryByText(modalText);

      expect(title).toBeInTheDocument();
      expect(renderedModalText).toBeInTheDocument();
    });
  });
});
