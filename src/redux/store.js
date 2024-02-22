import { configureStore } from '@reduxjs/toolkit';
import tasksReuser from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReuser,
  },
});
