import { configureStore } from '@reduxjs/toolkit';
import TodoSlice from './Slices/Todo/todoSlice';

export const store = configureStore({
  reducer: {
    TodoSlice: TodoSlice,
  },
});
