import { screen } from "@testing-library/react";
import mockProfilesState from "../../mocks/states/mockProfilesState";
import mockUiState from "../../mocks/states/mockUiState";
import mockUserStateLogged from "../../mocks/states/mockUserStateLogged";
import renderWithProviders from "../../testUtils/renderWithProviders";
import ProfilesPage from "./ProfilesPage";

describe("Given a ProfilesPage", () => {
  describe("When it is rendered", () => {
    test("Then it should show a list of profiles", () => {
      const expectedText = "10 profiles found";

      renderWithProviders(<ProfilesPage />, {
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
