import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Todos: [{
      id: 1,
      todo: "My first Todo !",
    }]
};

export const TodoSlice = createSlice({
  name: "Todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const currentData = {
        id: nanoid(),
        todo: action.payload,
      };
      state.Todos.push(currentData);
    },
    removeTodo: (state, action) => {
      state.Todos = state.Todos.filter((td) => td.id != action.payload);
    },
    updateTodo: (state, action) => {
      const { id, todo } = action.payload;
      const exisitingTodo = state.Todos.find((todo) => todo.id == id);
      if (exisitingTodo) {
        exisitingTodo.todo = todo;
      }
    },
  },
});

export default TodoSlice.reducer
export const {addTodo , removeTodo , updateTodo} = TodoSlice.actions