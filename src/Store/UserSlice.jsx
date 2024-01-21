import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      console.log('Login payload:', action.payload);
    },
    logout: (state) => {
      state.user = {
        name: '',
        role: '',
        token: '',
      };
    },
    incrementByAmount: (state, action) => {
      state.user += action.payload;
    },
  },
});

export const { login, logout, incrementByAmount } = userSlice.actions;

export default userSlice.reducer;
