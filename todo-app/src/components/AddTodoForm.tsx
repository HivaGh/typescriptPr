import { useState } from "react";
import Button from "./Button";

export default function AddTodoForm({ todos, setTodos }) {

  const [todoText, setTodoText] = useState("");
  
  const addTodo = (todoText) => {
    if (todos.length >= 3) {
      alert("Login to add more than 3 todos");
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(todoText);
        setTodoText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full p-2"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}
