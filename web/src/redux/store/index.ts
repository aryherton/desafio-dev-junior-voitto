import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../slice/userSlice';
import studentReducer from '../slice/studentSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    student: studentReducer,
  },
})