import React, { useRef, useState } from "react";
import "./Personal.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import Chart from "./Chart";
import Header from "../Header";
import Calendar from "react-calendar";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Personal = () => {
  const tileClassName = ({ date }) => {
    if (date.getDay() === 0) {
      return "sundayTile";
    } else if (date.getDay() === 6) {
      return "saturdayTile";
    } else if (date.getMonth() === value.getMonth()) {
      return "currentMonthTile";
    }
    return null;
  };

  const no = useRef(1);

  const [todos, setTodos] = useState([]);
  const [value, onChange] = useState(new Date());

  const onAdd = (text) => {
    setTodos([
      ...todos,
      {
        id: no.current++,
        text: text,
        done: false,
      },
    ]);
  };

  const onDel = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  };

  return (
    <div>
      <Header />
      <div className="personal_container">
        <div className="personal_leftSide">
          <span>
            <Chart />
          </span>
          <div className="Todos">
            <h1>TODO LIST</h1>
            <TodoInput onAdd={onAdd} />
            <TodoList todos={todos} onDel={onDel} onToggle={onToggle} />
          </div>
        </div>
        <div className="personal_rightSide">
          <Calendar
            className="calendar-parent"
            value={value}
            onChange={onChange}
            locale="en-US"
            nextLabel={<HiChevronRight />}
            prevLabel={<HiChevronLeft />}
            next2Label={null}
            prev2Label={null}
            tileClassName={({ date }) => tileClassName({ date })}
            tileContent={({ date }) => (
              <div className={`currentMonthTile ${tileClassName({ date })}`} />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Personal;
