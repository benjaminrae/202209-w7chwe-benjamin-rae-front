import { renderHook } from "@testing-library/react";
import { EditProfileData } from "../../components/EditProfileForm/EditProfileForm";
import mockGetProfileByIdResponse from "../../mocks/responses/mockGetProfileByIdResponse";
import mockLoadProfilesResponse from "../../mocks/responses/mockLoadProfilesResponse";
import mockUpdateRelationshipResponse from "../../mocks/responses/mockUpdateRelationshipResponse";
import mockInitialStore from "../../mocks/stores/mockInitialStore";
import {
  loadCurrentProfileActionCreator,
  loadProfilesActionCreator,
} from "../../redux/features/profilesSlice/profilesSlice";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import ProviderWrapper from "../../testUtils/ProviderWrapper";
import { UpdateRelationshipBody } from "./types";
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

  describe("When its method edit profile is invoked with id '1234' and new location 'Barcelona' and the server responds with status 500", () => {
    test("Then it should invoke dispatch 3 times to show and hide loading and to show the modal with an error", async () => {
      const {
        result: {
          current: { editProfile },
        },
      } = renderHook(() => useProfiles(), {
        wrapper: ProviderWrapper,
      });

      const newEmail: Partial<EditProfileData> = {
        location: "Barcelona",
      };

      await editProfile(newEmail as EditProfileData);

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

  describe("When its method edit profile is introduced with id '1234' and new location 'Barcelona'", () => {
    test("Then it should invoke dispatch 3 times to show and hide loading and to show the modal", async () => {
      const {
        result: {
          current: { editProfile },
        },
      } = renderHook(() => useProfiles(), {
        wrapper: ProviderWrapper,
      });

      const newEmail: Partial<EditProfileData> = {
        location: "Barcelona",
      };

      await editProfile(newEmail as EditProfileData);

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
          isError: false,
          modalText: "Profile updated successfully",
        })
      );
    });
  });

  describe("When its method get profile by id is invoked with id '1234' and the server responds with status 500", () => {
    test("Then it should invoke dispatch 3 times to show and hide loading and to show the modal with an error", async () => {
      const {
        result: {
          current: { getProfileById },
        },
      } = renderHook(() => useProfiles(), {
        wrapper: ProviderWrapper,
      });

      const userId = "1234";

      await getProfileById(userId);

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

  describe("When its method get profile by id is invoked with id '1234'", () => {
    test("Then dispatch should be invoked 4 times to show loading, send the profile to the store and hide loading", async () => {
      const {
        result: {
          current: { getProfileById },
        },
      } = renderHook(() => useProfiles(), {
        wrapper: ProviderWrapper,
      });

      const userId = "1234";
      const profile = mockGetProfileByIdResponse;

      await getProfileById(userId);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        loadCurrentProfileActionCreator(profile)
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        hideLoadingActionCreator()
      );
    });
  });

  describe("When its method update relationship is invoked with id '1234' and the server responds with status 500", () => {
    test("Then it should invoke dispatch show the modal with an error", async () => {
      const {
        result: {
          current: { updateRelationship },
        },
      } = renderHook(() => useProfiles(), {
        wrapper: ProviderWrapper,
      });

      const newRelationship: UpdateRelationshipBody = {
        currentUser: "",
        relationship: "friends",
        targetUserId: "1234",
        targetUser: "",
      };

      await updateRelationship(newRelationship);

      expect(dispatchSpy).toHaveBeenCalledWith(
        showModalActionCreator({
          isError: true,
          modalText: "Request failed with status code 500",
        })
      );
    });
  });

  describe("When its method update relationship is invoked with target id '1234'", () => {
    test("Then dispatch should be called once to update the current profile", async () => {
      const {
        result: {
          current: { updateRelationship },
        },
      } = renderHook(() => useProfiles(), {
        wrapper: ProviderWrapper,
      });

      const newRelationship: UpdateRelationshipBody = {
        currentUser: "",
        relationship: "friends",
        targetUserId: "1234",
        targetUser: "",
      };

      await updateRelationship(newRelationship);

      expect(dispatchSpy).toHaveBeenCalledWith(
        loadCurrentProfileActionCreator(mockUpdateRelationshipResponse)
      );
    });
  });
});
