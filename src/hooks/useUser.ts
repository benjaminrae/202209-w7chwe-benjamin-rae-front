import axios from "axios";
import { RegisterFormData } from "../components/RegisterForm/RegisterForm";

interface UseUserStructure {
  registerUser: (registerFormData: RegisterFormData) => Promise<void>;
}

const apiUrl = process.env.REACT_APP_API_URL;

const userRoutes = {
  usersRoute: "/users",
  registerRoute: "/register",
};

const useUser = (): UseUserStructure => {
  const registerUser = async (registerFormData: RegisterFormData) => {
    try {
      await axios.post(
        `${apiUrl}${userRoutes.usersRoute}${userRoutes.registerRoute}`,
        registerFormData
      );
    } catch (error: unknown) {}
  };

  return {
    registerUser,
  };
};

export default useUser;
