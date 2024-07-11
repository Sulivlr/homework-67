import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface PasswordState {
  value: string;
  isCorrect: boolean | null;
}

const initialState: PasswordState = {
  value: '',
  isCorrect: null,
}

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    writeDigit: (state,action:PayloadAction<number>) => {
      if (state.value.length < 4) {
        state.value += action.payload;
      }
    },
    deleteDigit: (state) => {
      state.value = state.value.slice(0, -1);
    },
    truePassword: (state) => {
      state.isCorrect = state.value === '1337';
    },
  }
});

export const {writeDigit, deleteDigit, truePassword} = passwordSlice.actions;
export default passwordSlice.reducer;