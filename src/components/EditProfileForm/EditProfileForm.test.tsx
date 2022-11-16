import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../testUtils/renderWithProviders";
import EditProfileForm from "./EditProfileForm";

const mockEditProfile = jest.fn();

jest.mock("../../hooks/useProfiles/useProfiles", () => {
  return () => ({
    editProfile: mockEditProfile,
    getProfileById: jest.fn(),
  });
});

describe("Given an EditProfileForm component", () => {
  const locationLabel = /location/i;
  const birthdayLabel = /birthday/i;
  const bioLabel = /bio/i;
  const avatarLabel = /avatar/i;
  const saveButtonText = /save changes/i;

  describe("When it is rendered", () => {
    test("Then it should show a heading level 2 with 'Edit your profile' 4 inputs 'Location','Birthday', 'Bio', 'Avatar' and a 'Save Changes' button", () => {
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

  describe("When it is rendered and the user types in location 'Barcelona', birthday '1993-02-24', bio 'Hola, me gusta la playa' and submits the form", () => {
    test("Then update profile should be called with those details", async () => {
      const image = new File(["avatar"], "avatar.jpg", { type: "image/jpg" });
      const editFormDetails = {
        location: "Barcelona",
        birthday: "1993-02-24",
        bio: "Hola, me gusta la playa",
        image,
      };

      URL.createObjectURL = jest.fn().mockReturnValue(image.name);

      renderWithProviders(<EditProfileForm />);

      const locationInput = screen.queryByRole("textbox", {
        name: locationLabel,
      });
      const bioInput = screen.queryByRole("textbox", {
        name: bioLabel,
      });
      const birthdayInput = screen.queryByLabelText(birthdayLabel);
      const avatarInput = screen.queryByLabelText(avatarLabel);
      const renderedButton = screen.queryByRole("button", {
        name: saveButtonText,
      });

      await userEvent.type(locationInput!, editFormDetails.location);
      await userEvent.type(birthdayInput!, editFormDetails.birthday);
      await userEvent.type(bioInput!, editFormDetails.bio);
      await userEvent.upload(avatarInput!, image);
      await userEvent.click(renderedButton!);

      expect(mockEditProfile).toHaveBeenCalledWith(editFormDetails);
    });
  });
});
