import { getRandomProfileList } from "../../factories/profileFactory";
import {
  ProfilesState,
  ProfileStructure,
} from "../../redux/features/profilesSlice/types";

const mockProfilesState: ProfilesState = {
  profiles: getRandomProfileList(10),
  currentProfile: {} as ProfileStructure,
};

export default mockProfilesState;
