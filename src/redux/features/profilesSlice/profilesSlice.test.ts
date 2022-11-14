import { profile } from "console";
import {
  getRandomProfile,
  getRandomProfileList,
} from "../../../factories/profileFactory";
import mockProfilesState from "../../../mocks/states/mockProfilesState";
import {
  loadCurrentProfileActionCreator,
  loadProfilesActionCreator,
  profilesReducer,
} from "./profilesSlice";
import { ProfilesState, ProfileStructure } from "./types";

describe("Given a profilesReducer", () => {
  describe("When it receives the current state and an unknown action", () => {
    test("Then it should return a copy of the state with no changes", () => {
      const currentState: ProfilesState = mockProfilesState;
      const unknownAction = {
        type: "profiles/unknownAction",
      };

      const newState = profilesReducer(currentState, unknownAction);

      expect(newState).toStrictEqual(currentState);
    });
  });

  describe("When it receives a state with an empty profiles list and a load profiles action with 10 profiles", () => {
    test("Then it should return a copy of the state with 10 profiles", () => {
      const currentState: ProfilesState = {
        profiles: [],
        currentProfile: {} as ProfileStructure,
      };
      const actionPayload: ProfileStructure[] = getRandomProfileList(10);
      const expectedState: ProfilesState = {
        profiles: actionPayload,
        currentProfile: {} as ProfileStructure,
      };

      const newState = profilesReducer(
        currentState,
        loadProfilesActionCreator(actionPayload)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it receives an intial profiles state and an loadCurrentProfileAction with a user profile", () => {
    test("Then it should return a copy of the state with currentProfile as the received profile", () => {
      const currentState: ProfilesState = {
        profiles: [],
        currentProfile: {} as ProfileStructure,
      };
      const actionPayload: ProfileStructure = getRandomProfile();
      const expectedState: ProfilesState = {
        profiles: [],
        currentProfile: actionPayload,
      };

      const newState = profilesReducer(
        currentState,
        loadCurrentProfileActionCreator(actionPayload)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
