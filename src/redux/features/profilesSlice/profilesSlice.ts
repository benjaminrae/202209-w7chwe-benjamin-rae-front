import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileStructure, ProfilesState } from "./types";

const initialProfilesState: ProfilesState = {
  profiles: [],
  currentProfile: {
    enemies: [] as string[],
    friends: [] as string[],
  } as ProfileStructure,
};

const profilesSlice = createSlice({
  name: "profiles",
  initialState: initialProfilesState,
  reducers: {
    loadProfiles: (
      currentProfilesState,
      action: PayloadAction<ProfileStructure[]>
    ) => ({
      ...currentProfilesState,
      profiles: action.payload,
    }),
    loadCurrentProfile: (
      currentProfilesState,
      action: PayloadAction<ProfileStructure>
    ) => ({
      ...currentProfilesState,
      currentProfile: action.payload,
    }),
  },
});

export const {
  loadProfiles: loadProfilesActionCreator,
  loadCurrentProfile: loadCurrentProfileActionCreator,
} = profilesSlice.actions;

export const profilesReducer = profilesSlice.reducer;
