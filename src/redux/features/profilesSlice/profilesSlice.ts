import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProfileStructure, ProfilesState } from "./types";

const initialProfilesState: ProfilesState = {
  profiles: [],
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
  },
});

export const { loadProfiles: loadProfilesActionCreator } =
  profilesSlice.actions;

export const profilesReducer = profilesSlice.reducer;
