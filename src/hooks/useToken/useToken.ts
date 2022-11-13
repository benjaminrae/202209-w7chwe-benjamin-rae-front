import { debug } from "console";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import { CustomTokenPayload } from "../useUser/types";

interface UseTokenStructure {
  getToken: () => void;
}

const useToken = (): UseTokenStructure => {
  const dispatch = useAppDispatch();

  const getToken = () => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const user = decodeToken<CustomTokenPayload>(token);

      dispatch(loginUserActionCreator({ ...user, token }));
    }
  };

  return {
    getToken,
  };
};

export default useToken;
