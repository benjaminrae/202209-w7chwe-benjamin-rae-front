import { createSlice } from "@reduxjs/toolkit";
import { UiState } from "./types";

const initialUiState: UiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState) => {
      currentUiState.isLoading = true;
    },

    hideLoading: (currentUiState) => {
      currentUiState.isLoading = false;
    },
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
