import { getRandomProfileList } from "../../factories/profileFactory";
import { LoadProfilesResponse } from "../../hooks/useProfiles/types";

const mockLoadProfilesResponse: LoadProfilesResponse = {
  profiles: getRandomProfileList(10),
};

export default mockLoadProfilesResponse;
