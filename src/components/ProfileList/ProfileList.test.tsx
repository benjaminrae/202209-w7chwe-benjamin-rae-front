import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import ProfileList from "./ProfileList";

describe("Given a ProfileList", () => {
  describe("When it is rendered and there are 20 profiles in the store", () => {
    test("Then it should show a list of 20 profiles and the text '20 profiles found'", () => {
      const expectedText = "20 profiles found";

      renderWithProviders(<ProfileList />);

      const renderedText = screen.queryByText(expectedText);
      const renderedProfiles = screen.queryAllByRole("listitem");

      expect(renderedText).toBeInTheDocument();
      expect(renderedProfiles).toHaveLength(20);
    });
  });
});
