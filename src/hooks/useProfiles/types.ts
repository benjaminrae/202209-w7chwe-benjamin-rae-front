import { ProfileStructure } from "../../redux/features/profilesSlice/types";

export interface LoadProfilesResponse {
  profiles: ProfileStructure[];
}

export interface GetProfileByIdResponse {
  profile: ProfileStructure;
}

export type Relationships = "friends" | "enemies" | "removed";

export interface UpdateRelationshipBody {
  currentUser: string;
  targetUser: string;
  targetUserId: string;
  relationship: Relationships;
}
