import { renderHook } from "@testing-library/react";
import { RegisterFormData } from "../components/RegisterForm/RegisterForm";
import mockInitialStore from "../mocks/stores/mockInitialStore";
import { ShowModalActionPayload } from "../redux/features/uiSlice/types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../redux/features/uiSlice/uiSlice";
import { User } from "../redux/features/userSlice/types";
import { loginUserActionCreator } from "../redux/features/userSlice/userSlice";
import ProviderWrapper from "../testUtils/ProviderWrapper";
import { CustomTokenPayload } from "./types";
import useUser, { LoginFormData } from "./useUser";

jest.mock("jwt-decode", () => {
  return () => ({ id: "testid", username: "admin" } as CustomTokenPayload);
});

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

jest.spyOn(Object.getPrototypeOf(window.localStorage), "setItem");
Object.setPrototypeOf(window.localStorage.setItem, jest.fn());

describe("Given the custom hook useUser", () => {
  describe("When it's method registerUser is invoked with username 'admin', email 'admin@feisbuk.com' and password 'admin123'", () => {
    test("Then dispatch should be called three times to show and hide loading and show the modal", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const newUser: RegisterFormData = {
        username: "admin",
        email: "admin@feisbook.com",
        password: "admin123",
        confirmPassword: "admin123",
      };
      const actionPayload: ShowModalActionPayload = {
        isError: false,
        modalText: "You're registered! Log in to make new friends",
      };

      await registerUser(newUser);

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
        showModalActionCreator(actionPayload)
      );
    });
  });

  describe("When its method registerUser is invoked with username 'alexander', email 'alexander@gmail.com' and passwords '12345678' but the user is already registered in the database", () => {
    test("Then dispatch should be called 3 times to show and hide loading and to show the modal with an error message", async () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
      const newUser: RegisterFormData = {
        username: "alexander",
        email: "alexander@gmail.com",
        password: "12345678",
        confirmPassword: "12345678",
      };
      const actionPayload: ShowModalActionPayload = {
        isError: true,
        modalText: "User is already registered",
      };

      await registerUser(newUser);

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
        showModalActionCreator(actionPayload)
      );
    });
  });

  describe("When its method loginUser is invoked with username 'admin' and incorrect password '12345678'", () => {
    test("Then dispatch should be called 3 times to show and hide loading and to show the modal with an error message", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const user: LoginFormData = {
        username: "admin",
        password: "12345678",
      };

      const actionPayload: ShowModalActionPayload = {
        isError: true,
        modalText: "Incorrect username or password",
      };

      await loginUser(user);

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
        showModalActionCreator(actionPayload)
      );
    });
  });

  describe("When its method loginUser is invoked with username 'admin' and correct password 'admin123", () => {
    test("Then dispatch should be called 3 times to show and hide loading and to login user and the token should be stored in local storage", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });

      const user: LoginFormData = {
        username: "admin",
        password: "admin123",
      };

      const actionPayload: User = {
        username: "admin",
        id: "testid",
        token: "testtoken",
      };

      await loginUser(user);

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
        loginUserActionCreator(actionPayload)
      );
      expect(window.localStorage.setItem).toHaveBeenCalledWith(
        "token",
        actionPayload.token
      );
    });
  });
});
