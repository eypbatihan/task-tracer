import React, { useState } from "react";
import { FormInput, TaskBar } from "./CardStyle";

const Form = ({ addFull }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100) + 1;
    addFull({ task, date, isDone: false, id });
    setTask("");
    setDate("");
  };

  return (
    <TaskBar>
      <FormInput onSubmit={onSubmit}>
        <label htmlFor="task">Task</label>
        <input
          type="text"
          required
          placeholder="Task"
          id="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label htmlFor="day">Day & Time</label>
        <input
          type="date"
          required
          id="day"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit">SAVE TASK</button>
      </FormInput>
    </TaskBar>
  );
};

export default Form;
