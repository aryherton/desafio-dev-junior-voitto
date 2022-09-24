import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'student',
  initialState: {
    student: '',
    arrStudents: '',
  },

  reducers: {
    changeStudent: (state, { payload }) => {
      return { ...state, student: payload };
    },
    changeArrStudents: (state, { payload }) => {
      return { ...state, arrStudents: payload };
    },
  },
})

export const { changeStudent } = slice.actions;
export const { changeArrStudents } = slice.actions;

export const selectUser = (state: { student: IStudent; }) => state.student;
export const selectArrStudents = (state: { arrStudents: IStudent[]; }) => state.arrStudents;

export default slice.reducer;