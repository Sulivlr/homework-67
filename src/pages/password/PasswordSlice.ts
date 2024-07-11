import {createSlice} from '@reduxjs/toolkit';

interface PasswordState {
  value: string;
  isCorrect: boolean | null;
}

const initialState: PasswordState = {
  value: '',
  isCorrect: null,
};

export const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {}
});

export default passwordSlice.reducer;