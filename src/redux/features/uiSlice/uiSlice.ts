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

    hideModal: (currentUiState) => ({
      ...currentUiState,
      showModal: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showModal: showModalActionCreator,
  hideModal: hideModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
