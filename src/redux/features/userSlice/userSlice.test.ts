import { getRandomUser } from "../../../factories/userFactory";
import mockUserStateLogged from "../../../mocks/states/mockUserStateLogged";
import mockUserStateNotLogged from "../../../mocks/states/mockUserStateNotLogged";
import { UserState } from "./types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
  userReducer,
} from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives the initial state and an unknown action", () => {
    test("Then it should return a copy of the intial state", () => {
      const unknownAction = {
        type: "user/unknownAction",
      };

      const newState = userReducer(mockUserStateNotLogged, unknownAction);

      expect(newState).toStrictEqual(mockUserStateNotLogged);
    });
  });

  describe("When it receives the initial state and a login user action with a new user", () => {
    test("Then it should return the state with the users credentials and isLogged true", () => {
      const newUser = getRandomUser();
      const expectedState: UserState = {
        ...newUser,
        isLogged: true,
      };

      const newState = userReducer(
        mockUserStateNotLogged,
        loginUserActionCreator(newUser)
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });

  describe("When it receives a state with a logged in user and a logout action", () => {
    test("Then it should return a state with no user credentials and isLogged false", () => {
      const expectedState = mockUserStateNotLogged;

      const newState = userReducer(
        mockUserStateLogged,
        logoutUserActionCreator()
      );

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
