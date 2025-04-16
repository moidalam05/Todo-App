import React, { useState } from "react";

const AddTodo = () => {
  const [todoInput, setTodoInput] = useState("");
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="flex flex-col sm:flex-row gap-4 px-4 pt-20 sm:pt-40 w-full items-center justify-center"
      onSubmit={handleFormSubmit}
    >
      <input
        className="bg-slate-800 px-5 py-3 w-full sm:max-w-xl shadow-md text-white outline-none font-medium placeholder:text-slate-400 rounded-md transition duration-200 focus:ring-2 focus:ring-blue-500"
        type="text"
        placeholder="Enter your todo"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        className="bg-blue-600 hover:bg-blue-700 active:scale-95 transition-transform duration-150 px-6 py-3 rounded-md text-white font-semibold shadow-md cursor-pointer"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodo;
