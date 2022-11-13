import { renderHook } from "@testing-library/react";
import mockLocalStorage from "../../mocks/localStorage/mockLocalStorage";
import mockInitialStore from "../../mocks/stores/mockInitialStore";
import { User } from "../../redux/features/userSlice/types";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import ProviderWrapper from "../../testUtils/ProviderWrapper";
import { CustomTokenPayload } from "../useUser/types";
import useToken from "./useToken";

beforeEach(() => {
  jest.clearAllMocks();
});

const mockUser: User = {
  username: "admin",
  id: "testid",
  token: "testtoken",
};

jest.mock("jwt-decode", () => {
  return () =>
    ({ id: mockUser.id, username: mockUser.username } as CustomTokenPayload);
});

Object.defineProperty(window, "localStorage", {
  value: mockLocalStorage,
});

beforeAll(() => {
  mockLocalStorage.setItem("token", "testtoken");
});

afterAll(() => {
  mockLocalStorage.clear();
});

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

describe("Given a useToken custom hook", () => {
  describe("When its method getToken is invoked and there is the token 'testtoken' in local storage", () => {
    test("Then it should call dispatch with a login user action", () => {
      const {
        result: {
          current: { getToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      getToken();

      expect(dispatchSpy).toHaveBeenCalledWith(
        loginUserActionCreator(mockUser)
      );
    });
  });

  describe("When its method removeToken is invoked and there is the token 'testtoken' in local storage", () => {
    test("Then the token should be removed from local storage", () => {
      const {
        result: {
          current: { removeToken },
        },
      } = renderHook(() => useToken(), {
        wrapper: ProviderWrapper,
      });

      removeToken();

      expect(mockLocalStorage.getItem("token")).toBe(undefined);
    });
  });
});
