import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";
import "./TodoItem.css";

const TodoItem = ({ todos, onDel, onToggle }) => {
  const { id, text, done } = todos;

  return (
    <div>
      <li className={done ? "on" : ""}>
        <span onClick={() => onToggle(id)}>
          {done ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
        </span>
        <span onClick={() => onToggle(id)} className={done ? "completed" : ""}>
          {text}
        </span>
        <button onClick={() => onDel(id)}>
          <FaRegTrashAlt />
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
