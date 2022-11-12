import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ShowModalActionPayload, UiState } from "./types";

const initialUiState: UiState = {
  isLoading: false,
  isError: false,
  showModal: false,
  modalText: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: true,
    }),

    hideLoading: (currentUiState) => ({
      ...currentUiState,
      isLoading: false,
    }),

    showModal: (
      currentUiState,
      action: PayloadAction<ShowModalActionPayload>
    ) => ({
      ...currentUiState,
      showModal: true,
      isError: action.payload.isError,
      modalText: action.payload.modalText,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
