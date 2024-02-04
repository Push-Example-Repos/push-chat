import { createSlice } from "@reduxjs/toolkit";

interface ModalsState {
  isNewContactsModalOpen: boolean;
  activeWallet: string | null;
}

const initialState: ModalsState = {
  activeWallet: null,
  isNewContactsModalOpen: false,
};

const modalsSlice = createSlice({
  name: "modals",

  initialState,

  reducers: {
    toggleNewContactsModal: (state: ModalsState) => {
      state.isNewContactsModalOpen = !state.isNewContactsModalOpen;
    },

    setActiveWallet: (state: ModalsState, action) => {
      state.activeWallet = action.payload;
    },
  },
});

export const { toggleNewContactsModal, setActiveWallet } = modalsSlice.actions;

export default modalsSlice.reducer;
