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
        addTodo: (state, actions) => { },
        deleteTodo: (state, actions) => { },
        updateTodo: (state, actions) => { },
        completeTodo: (state, actions) => { },
    }
});

export default todoSlice.reducer;
export const { addTodo, deleteTodo, updateTodo, completeTodo } = todoSlice.actions;
