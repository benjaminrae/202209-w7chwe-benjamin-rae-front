import { User } from "../userSlice/types";

export interface ProfileStructure extends Omit<User, "token"> {
  email: string;
  location?: string;
  bio?: string;
  image?: string;
  backupImage?: string;
  birthday?: string;
  friends?: string[];
  enemies?: string[];
}

export interface CompleteProfileStructure
  extends Omit<ProfileStructure, "friends" | "enemies"> {
  friends: ProfileStructure[];
  enemies: ProfileStructure[];
}

export interface ProfilesState {
  profiles: ProfileStructure[];
  currentProfile: ProfileStructure | CompleteProfileStructure;
}
