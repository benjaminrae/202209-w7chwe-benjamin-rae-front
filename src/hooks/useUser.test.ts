import { renderHook } from "@testing-library/react";
import { RegisterFormData } from "../components/RegisterForm/RegisterForm";
import mockInitialStore from "../mocks/stores/mockInitialStore";
import { ShowModalActionPayload } from "../redux/features/uiSlice/types";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../redux/features/uiSlice/uiSlice";
import ProviderWrapper from "../testUtils/ProviderWrapper";
import useUser from "./useUser";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");

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
});
