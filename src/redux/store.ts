import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { userReducer } from "./features/userSlice/userSlice";
import { uiReducer } from "./features/uiSlice/uiSlice";
import { profilesReducer } from "./features/profilesSlice/profilesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    ui: uiReducer,
    profiles: profilesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
