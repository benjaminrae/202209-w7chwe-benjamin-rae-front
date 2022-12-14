import { screen } from "@testing-library/react";
import mockProfilesState from "../../mocks/states/mockProfilesState";
import mockUiState from "../../mocks/states/mockUiState";
import mockUserStateLogged from "../../mocks/states/mockUserStateLogged";
import renderWithProviders from "../../testUtils/renderWithProviders";
import ProfileList from "./ProfileList";

describe("Given a ProfileList", () => {
  describe("When it is rendered and there are 10 profiles in the store", () => {
    test("Then it should show a list of 10 profiles and the text '10 profiles found'", () => {
      const expectedText = "10 profiles found";

      renderWithProviders(<ProfileList />, {
        preloadedState: {
          profiles: mockProfilesState,
          ui: mockUiState,
          user: mockUserStateLogged,
        },
      });

      const renderedText = screen.queryByText(expectedText);
      const renderedProfiles = screen.queryAllByRole("listitem");

      expect(renderedText).toBeInTheDocument();
      expect(renderedProfiles).toHaveLength(10);
    });
  });
});
