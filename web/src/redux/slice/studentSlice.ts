import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'student',
  initialState: {
    student: '',
    editStudent: '',
    arrStudents: '',
    addStudent: false,
  },

  reducers: {
    changeStudent: (state, { payload }) => {
      return { ...state, student: payload };
    },
    changeEditStudent: (state, { payload }) => {
      return { ...state, editStudent: payload };
    },
    changeArrStudents: (state, { payload }) => {
      return { ...state, arrStudents: payload };
    },
    changeAddStudent: (state, { payload }) => {
      return { ...state, addStudent: payload };
    },
  },
})

export const { changeStudent } = slice.actions;
export const { changeEditStudent } = slice.actions;
export const { changeArrStudents } = slice.actions;
export const { changeAddStudent } = slice.actions;

export const selectStudent = (state: { student: IStudent; }) => state.student;
export const selectEditStudent = (state: { editStudent: IStudent; }) => state.editStudent;
export const selectArrStudents = (state: { arrStudents: IStudent[]; }) => state.arrStudents;
export const selectAddStudent = (state: { addStudent: boolean; }) => state.addStudent;

export default slice.reducer;