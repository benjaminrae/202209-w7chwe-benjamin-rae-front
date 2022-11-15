import { ProfileStructure } from "../../redux/features/profilesSlice/types";

export interface LoadProfilesResponse {
  profiles: ProfileStructure[];
}

export interface GetProfileByIdResponse {
  profile: ProfileStructure;
}
