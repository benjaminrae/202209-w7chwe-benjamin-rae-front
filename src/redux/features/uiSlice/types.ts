export interface UiState {
  isLoading: boolean;
  showModal: boolean;
  isError: boolean;
  modalText: string;
}

export interface ShowModalActionPayload {
  isError: boolean;
  modalText: string;
}
