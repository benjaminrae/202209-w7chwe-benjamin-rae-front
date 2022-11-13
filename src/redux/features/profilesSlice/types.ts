import { User } from "../userSlice/types";

export interface ProfileStructure extends Omit<User, "token"> {
  email: string;
  location?: string;
  bio?: string;
  image?: string;
  backupImage?: string;
  birthday?: string;
}

export interface ProfilesState {
  profiles: ProfileStructure[];
}
