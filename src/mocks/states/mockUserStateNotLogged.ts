import { UserState } from "../../redux/features/userSlice/types";

const mockUserStateNotLogged: UserState = {
  id: "",
  isLogged: false,
  token: "",
  username: "",
};

export default mockUserStateNotLogged;
