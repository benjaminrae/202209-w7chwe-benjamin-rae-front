import axios, { AxiosError } from "axios";
import { RegisterFormData } from "../components/RegisterForm/RegisterForm";
import {
  hideLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../redux/features/uiSlice/uiSlice";
import { useAppDispatch } from "../redux/hooks";

interface AxiosErrorResponseBody {
  error: string;
}
interface UseUserStructure {
  registerUser: (registerFormData: RegisterFormData) => Promise<void>;
}

const apiUrl = process.env.REACT_APP_API_URL;

const userRoutes = {
  usersRoute: "/users",
  registerRoute: "/register",
};

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const registerUser = async (registerFormData: RegisterFormData) => {
    dispatch(showLoadingActionCreator());
    try {
      await axios.post(
        `${apiUrl}${userRoutes.usersRoute}${userRoutes.registerRoute}`,
        registerFormData
      );

      dispatch(hideLoadingActionCreator());
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

  return {
    registerUser,
  };
};

export default useUser;
