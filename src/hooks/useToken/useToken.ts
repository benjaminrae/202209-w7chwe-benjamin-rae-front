import decodeToken from "jwt-decode";
import { useCallback } from "react";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import { CustomTokenPayload } from "../useUser/types";

interface UseTokenStructure {
  getToken: () => void;
  removeToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = useCallback(() => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const user = decodeToken<CustomTokenPayload>(token);

      dispatch(loginUserActionCreator({ ...user, token }));
    }
  }, [dispatch]);

  const removeToken = () => {
    window.localStorage.removeItem("token");
  };

  return {
    getToken,
    removeToken,
  };
};

export default useToken;
