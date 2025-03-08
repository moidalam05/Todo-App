import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            title: "Todo 1",
            completed: false
        },

    ]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (actions, state) => { },
        deleteTodo: (actions) => { },
        updateTodo: (actions, state) => { },
        completeTodo: (actions) => { },
    }
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, updateTodo, completeTodo } = todoSlice.actions;
