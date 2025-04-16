import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { FilePenLine, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { completeTodo, deleteTodo, updateTodo } from "../redux/todoSlice";
import toast from "react-hot-toast";

const ListTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);
  console.log(todoList);

  const handleEdit = (todo) => {
    dispatch(updateTodo({ id: todo.id, title: todo.title }));
    setTodoInput(todo.title);
    setEditTodo(todo.id);
  };

  const handleDelete = (todo) => {
    dispatch(deleteTodo({ id: todo.id }));
    toast.success("Todo deleted successfully");
  };

  const handleComplete = (todo) => {
    dispatch(completeTodo({ id: todo.id }));
    if (!todo.completed) {
      toast.success("Todo mark as completed");
    } else {
      toast.success("Todo mark as not completed");
    }
  };

  useEffect(() => {
    setTodoList(todos.todos);
  }, [todos.todos]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos.todos));
  }, [todos.todos]);
  return (
    <div>
      <AddTodo
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
      <h1 className="text-center mt-8 text-2xl font-bold">Todo List</h1>
      <ul className="flex flex-col gap-4 px-4 pt-6 sm:pt-4 w-full items-center justify-center">
        {[...todoList]
          .slice()
          .reverse()
          .map((todo) => (
            <li
              key={todo.id}
              className="w-full max-w-3xl flex justify-between items-center bg-slate-800 px-5 py-3 rounded-md shadow-md"
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="cursor-pointer accent-blue-600"
                  checked={todo.completed}
                  onChange={() => handleComplete(todo)}
                />
                <p
                  className={`pl-4 ${
                    todo.completed ? "line-through text-slate-400" : ""
                  }`}
                >
                  {todo.title}
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  className="cursor-pointer text-yellow-500 active:scale-95 transition-transform duration-150"
                  onClick={() => handleEdit(todo)}
                >
                  <FilePenLine className="w-6 h-6" />
                </button>
                <button
                  className="cursor-pointer text-red-500 active:scale-95 transition-transform duration-150"
                  onClick={() => handleDelete(todo)}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ListTodo;
