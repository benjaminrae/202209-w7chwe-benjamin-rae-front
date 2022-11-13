import { getRandomProfileList } from "../../factories/profileFactory";
import { ProfilesState } from "../../redux/features/profilesSlice/types";

const mockProfilesState: ProfilesState = {
  profiles: getRandomProfileList(10),
};

export default mockProfilesState;
