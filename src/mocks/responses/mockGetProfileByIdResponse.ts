import { getRandomProfile } from "../../factories/profileFactory";
import { ProfileStructure } from "../../redux/features/profilesSlice/types";

const mockGetProfileByIdResponse: ProfileStructure = {
  ...getRandomProfile(),
  id: "1234",
};

export default mockGetProfileByIdResponse;
