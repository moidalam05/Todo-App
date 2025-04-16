import React from "react";
import AddTodo from "./AddTodo";
import { FilePenLine, X } from "lucide-react";

const ListTodo = () => {
  return (
    <div>
      <AddTodo />
      <h1 className="text-center mt-8 text-2xl font-bold">Todo List</h1>
      <ul className="flex flex-col gap-4 px-4 pt-6 sm:pt-4 w-full items-center justify-center">
        <li className="w-full max-w-3xl flex justify-between items-center bg-slate-800 px-5 py-3 rounded-md">
          <div className="flex items-center">
            <input type="checkbox" className="cursor-pointer" />
            <p className="pl-4">Buy groceries</p>
          </div>
          <div className="flex gap-4">
            <button className="cursor-pointer text-yellow-500 active:scale-95 transition-transform duration-150">
              <FilePenLine className="w-6 h-6" />
            </button>
            <button className="cursor-pointer text-red-500 active:scale-95 transition-transform duration-150">
              <X className="w-6 h-6" />
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ListTodo;
