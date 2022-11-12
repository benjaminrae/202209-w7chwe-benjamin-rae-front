import { renderHook } from "@testing-library/react";
import useUser from "./useUser";

describe("Given the custom hook useUser", () => {
  describe("When it's method registerUser is invoked with username 'admin', email 'admin@feisbuk.com' and password 'admin123'", () => {
    test("Then dispatch should be called three times to show and hide loading and show the modal", () => {
      const {
        result: {
          current: { registerUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: ProviderWrapper,
      });
    });
  });
});
