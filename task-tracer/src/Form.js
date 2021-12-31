import React from "react";
import { FormInput, TaskBar } from "./CardStyle";

const Form = ({ buttonName }) => {
  console.log(buttonName);
  return (
    <TaskBar>
      <FormInput>
        <label htmlFor="task">Task</label>
        <input type="text" placeholder="Task" id="task" />
        <label htmlFor="day">Day & Time</label>
        <input type="date" id="day" />
      </FormInput>
      <button type="submit">SAVE TASK</button>
    </TaskBar>
  );
};

export default Form;
