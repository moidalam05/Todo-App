import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "../redux/todoSlice";


export const store = configureStore({
    reducer: todoSlice
});

