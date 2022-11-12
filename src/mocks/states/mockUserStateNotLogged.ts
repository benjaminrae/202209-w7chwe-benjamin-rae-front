import { getRandomUser } from "../../factories/userFactory";
import { UserState } from "../../redux/features/userSlice/types";

const mockUserStateLogged: UserState = {
  ...getRandomUser(),
  isLogged: true,
};

export default mockUserStateLogged;
