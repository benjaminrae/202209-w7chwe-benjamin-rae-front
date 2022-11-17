import { getRandomProfile } from "../../factories/profileFactory";
import { ProfileStructure } from "../../redux/features/profilesSlice/types";

const mockUpdateRelationshipResponse: ProfileStructure = {
  ...getRandomProfile(),
  friends: ["1234"],
};

export default mockUpdateRelationshipResponse;
