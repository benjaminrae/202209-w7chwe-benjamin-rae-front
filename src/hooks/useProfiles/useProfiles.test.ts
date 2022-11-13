import { renderHook } from "@testing-library/react";
import mockLoadProfilesResponse from "../../mocks/responses/mockLoadProfilesResponse";
import mockInitialStore from "../../mocks/stores/mockInitialStore";
import { loadProfilesActionCreator } from "../../redux/features/profilesSlice/profilesSlice";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import ProviderWrapper from "../../testUtils/ProviderWrapper";
import useProfiles from "./useProfiles";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

describe("Given the useProfiles custom hook", () => {
  describe("When its method loadAllProfiles is invoked and axios rejects", () => {
    test("Then dispatch should be called three times to show and hide loading and to show the modal with the message ''", async () => {
      const {
        result: {
          current: { loadAllProfiles },
        },
      } = renderHook(() => useProfiles(), {
        wrapper: ProviderWrapper,
      });

      await loadAllProfiles();

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        hideLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        showModalActionCreator({
          isError: true,
          modalText: "There was an error on the server",
        })
      );
    });
  });

  describe("When its method loadAllProfiles is invoked", () => {
    test("Then dispatch should be called three times to show and hide loading and to load the received profiles", async () => {
      const {
        result: {
          current: { loadAllProfiles },
        },
      } = renderHook(() => useProfiles(), {
        wrapper: ProviderWrapper,
      });

      const { profiles } = mockLoadProfilesResponse;

      await loadAllProfiles();

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        loadProfilesActionCreator(profiles)
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        hideLoadingActionCreator()
      );
    });
  });
});
