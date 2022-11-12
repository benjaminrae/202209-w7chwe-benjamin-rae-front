import mockUiState from "../../../mocks/states/mockUiState";
import { UiState } from "./types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When it is invoked", () => {
    describe("and it receives the initial ui state and an unknown action", () => {
      test("Then it should return a copy of the initial ui state", () => {
        const unknownAction = {
          type: "ui/unknownAction",
        };

        const newUiState = uiReducer(mockUiState, unknownAction);

        expect(newUiState).toStrictEqual(mockUiState);
      });
    });

    describe("and it receives the initial ui state and a show loading action", () => {
      test("Then it should return a copy of the initial state with isLoading true", () => {
        const expectedUiState = {
          ...mockUiState,
          isLoading: true,
        };

        const newUiState = uiReducer(mockUiState, showLoadingActionCreator());

        expect(newUiState).toStrictEqual(expectedUiState);
      });
    });

    describe("and it receives the initial ui state with loading true and a hide loading action", () => {
      test("Then it should return a copy of the initial state with isLoading false", () => {
        const initialUiState: UiState = {
          ...mockUiState,
          isLoading: true,
        };
        const expectedUiState: UiState = {
          ...mockUiState,
          isLoading: false,
        };

        const newUiState = uiReducer(
          initialUiState,
          hideLoadingActionCreator()
        );

        expect(newUiState).toStrictEqual(expectedUiState);
      });
    });
  });
});
