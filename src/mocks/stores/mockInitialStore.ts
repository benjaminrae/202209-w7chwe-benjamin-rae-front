import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../../redux/features/uiSlice/uiSlice";
import { userReducer } from "../../redux/features/userSlice/userSlice";
import { store } from "../../redux/store";
import mockUiState from "../states/mockUiState";
import mockUserStateNotLogged from "../states/mockUserStateNotLogged";

const mockInitialStore: typeof store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
  preloadedState: {
    ui: mockUiState,
    user: mockUserStateNotLogged,
  },
});

export default mockInitialStore;
