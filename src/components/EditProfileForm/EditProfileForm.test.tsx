import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import EditProfileForm from "./EditProfileForm";

describe("Given an EditProfileForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 with 'Edit your profile' 4 inputs 'Location','Birthday', 'Bio', 'Avatar' and a 'Save Changes' button", () => {
      const locationLabel = /location/i;
      const birthdayLabel = /birthday/i;
      const bioLabel = /bio/i;
      const avatarLabel = /avatar/i;
      const saveButtonText = /save changes/i;
      const expectedHeading = {
        level: 2,
        name: "Edit your profile",
      };

      renderWithProviders(<EditProfileForm />);

      const locationInput = screen.queryByRole("textbox", {
        name: locationLabel,
      });
      const bioInput = screen.queryByRole("textbox", {
        name: bioLabel,
      });
      const renderedButton = screen.queryByRole("button", {
        name: saveButtonText,
      });
      const renderedHeading = screen.queryByRole("heading", expectedHeading);
      const avatarInput = screen.queryByLabelText(avatarLabel);
      const birthdayInput = screen.queryByLabelText(birthdayLabel);

      expect(locationInput).toBeInTheDocument();
      expect(bioInput).toBeInTheDocument();
      expect(renderedButton).toBeInTheDocument();
      expect(renderedHeading).toBeInTheDocument();
      expect(avatarInput).toBeInTheDocument();
      expect(birthdayInput).toBeInTheDocument();
    });
  });
});
