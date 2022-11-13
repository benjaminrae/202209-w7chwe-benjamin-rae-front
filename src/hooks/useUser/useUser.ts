import axios, { AxiosError } from "axios";
import decodeToken from "jwt-decode";
import { RegisterFormData } from "../../components/RegisterForm/RegisterForm";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../../redux/features/uiSlice/uiSlice";
import { User } from "../../redux/features/userSlice/types";
import {
  loginUserActionCreator,
  logoutUserActionCreator,
} from "../../redux/features/userSlice/userSlice";
import { useAppDispatch } from "../../redux/hooks";
import useToken from "../useToken/useToken";
import { CustomTokenPayload } from "./types";

interface AxiosErrorResponseBody {
  error: string;
}
interface UseUserStructure {
  registerUser: (registerFormData: RegisterFormData) => Promise<void>;
  loginUser: (loginFormData: LoginFormData) => Promise<void>;
  logoutUser: () => void;
}

export interface LoginFormData {
  username: string;
  password: string;
}

interface LoginUserResponse {
  token: string;
}

const apiUrl = process.env.REACT_APP_API_URL;

const userRoutes = {
  usersRoute: "/users",
  registerRoute: "/register",
  loginRoute: "/login",
};

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();
  const { removeToken } = useToken();

  const registerUser = async (registerFormData: RegisterFormData) => {
    dispatch(showLoadingActionCreator());
    try {
      await axios.post(
        `${apiUrl}${userRoutes.usersRoute}${userRoutes.registerRoute}`,
        registerFormData
      );

      dispatch(hideLoadingActionCreator());
      dispatch(
        showModalActionCreator({
          isError: false,
          modalText: "You're registered! Log in to make new friends",
        })
      );
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());

      if (error instanceof AxiosError) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: (error as AxiosError<AxiosErrorResponseBody>).response
              ?.data.error!,
          })
        );
      }
    }
  };

  const loginUser = async (loginFormData: LoginFormData) => {
    dispatch(showLoadingActionCreator());
    try {
      const response = await axios.post<LoginUserResponse>(
        `${apiUrl}${userRoutes.usersRoute}${userRoutes.loginRoute}`,
        loginFormData
      );

      const { token } = response.data;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { username, id } = tokenPayload;

      const loggedUser: User = {
        username,
        id,
        token,
      };

      dispatch(hideLoadingActionCreator());
      dispatch(loginUserActionCreator(loggedUser));
      window.localStorage.setItem("token", token);
    } catch (error: unknown) {
      dispatch(hideLoadingActionCreator());

      if (error instanceof AxiosError) {
        dispatch(
          showModalActionCreator({
            isError: true,
            modalText: (error as AxiosError<AxiosErrorResponseBody>).response
              ?.data.error!,
          })
        );
      }
    }
  };

  const logoutUser = () => {
    removeToken();

    dispatch(logoutUserActionCreator());
  };

  return {
    registerUser,
    loginUser,
    logoutUser,
  };
};

export default useUser;
