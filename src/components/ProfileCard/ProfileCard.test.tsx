import { screen } from "@testing-library/react";
import { getRandomProfile } from "../../factories/profileFactory";
import renderWithProviders from "../../testUtils/renderWithProviders";
import getAge from "../../utils/getAge";
import ProfileCard from "./ProfileCard";

const userProfile = getRandomProfile();

describe("Given a ProfileCard component", () => {
  describe(`When it is rendered with ${userProfile.username}'s profile`, () => {
    test("Then it should show a heading level 3 with their username and age, the location, a 👍 and 👎 and their image", () => {
      const userAge = getAge(userProfile.birthday!);
      const expectedHeading = {
        level: 3,
        name: `${userProfile.username}, ${userAge}`,
      };
      const thumbsUpButtonText = "👍";
      const thumbsDownButtonText = "👎";

      renderWithProviders(<ProfileCard profile={userProfile} />);

      const renderedHeading = screen.queryByRole("heading", expectedHeading);
      const userLocation = screen.queryByText(userProfile.location!);
      const userImage = screen.queryByRole("img", {
        name: userProfile.username,
      });
      const thumbsUpButton = screen.queryByRole("button", {
        name: thumbsUpButtonText,
      });
      const thumbsDownButton = screen.queryByRole("button", {
        name: thumbsDownButtonText,
      });

      expect(renderedHeading).toBeInTheDocument();
      expect(userLocation).toBeInTheDocument();
      expect(userImage).toBeInTheDocument();
      expect(thumbsUpButton).toBeInTheDocument();
      expect(thumbsDownButton).toBeInTheDocument();
    });
  });
});
