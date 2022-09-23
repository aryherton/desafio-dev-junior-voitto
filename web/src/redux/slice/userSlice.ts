import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'user',
  initialState: {
    user: '',
    arrUsers: '',
  },

  reducers: {
    changeUser: (state, { payload }) => {
      return { ...state, user: payload };
    },
    changeArrUsers: (state, { payload }) => {
      return { ...state, arrUsers: payload };
    },
  },
})

export const { changeUser } = slice.actions;
export const { changeArrUsers } = slice.actions;

export const selectUser = (state: { user: Student; }) => state.user;
export const selectArrUsers = (state: { arrUsers: Student[]; }) => state.arrUsers;

export default slice.reducer;