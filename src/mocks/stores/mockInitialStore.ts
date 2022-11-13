import { configureStore } from "@reduxjs/toolkit";
import { profilesReducer } from "../../redux/features/profilesSlice/profilesSlice";
import { uiReducer } from "../../redux/features/uiSlice/uiSlice";
import { userReducer } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import mockProfilesState from "../states/mockProfilesState";
import mockUiState from "../states/mockUiState";
import mockUserStateNotLogged from "../states/mockUserStateNotLogged";

const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
    profiles: profilesReducer,
  },
  preloadedState: {
    ui: mockUiState,
    user: mockUserStateNotLogged,
    profiles: mockProfilesState,
  },
});

export default mockInitialStore;
