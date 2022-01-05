import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormInput, TaskBar } from "./CardStyle";
import { addTodo } from "./redux/actions/todoActions";

const Form = () => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(text, date));
    setText("");
    setDate("");
  };

  return (
    <TaskBar>
      <FormInput onSubmit={onSubmit}>
        <label htmlFor="task">Task</label>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          required
          placeholder="Task"
          id="task"
          value={text}
        />
        <label htmlFor="day">Day & Time</label>
        <input
          onChange={(e) => setDate(e.target.value)}
          type="date"
          required
          id="day"
          value={date}
        />
        <button type="submit">SAVE TASK</button>
      </FormInput>
    </TaskBar>
  );
};

export default Form;
