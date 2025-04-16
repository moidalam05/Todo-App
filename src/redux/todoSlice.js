import { createSlice } from "@reduxjs/toolkit";

const getInitialTodos = () => {
  const todosFromStorage = localStorage.getItem("todos");
  return todosFromStorage ? JSON.parse(todosFromStorage) : [];
};

const initialState = {
  todos: getInitialTodos(),
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, actions) => {
      state.todos.push(actions.payload);
    },
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== actions.payload.id
      );
    },
    updateTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, title: action.payload.title }
          : todo
      );
    },
    completeTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, updateTodo, completeTodo } =
  todoSlice.actions;
