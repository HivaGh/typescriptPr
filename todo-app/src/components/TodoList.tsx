import { useState } from "react";
import DeleteButton from "./DeleteButton";

export default function TodoList({todos, setTodos}) {

  return (
    <ul>
      {todos.length === 0 && <li className="h-full flex items-center justify-center font-semibold">start by adding todos</li> }
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-black/[8%]"
          onClick={() => {
            setTodos(todos.map((t) => {
              if (t.id == todo.id) {
                return { ...t, isComplited: !t.isComplited }
              }
              return t;
            }))
          }}
        >
          <span
            className={`${todo.isComplited ? "line-through text-[#ccc]" : ""}`}
          >
            {todo.text}
          </span>
          <DeleteButton setTodos={ setTodos } id={todo.id} />
        </li>
      ))}
    </ul>
  );
}
