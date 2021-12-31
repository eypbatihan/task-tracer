import React from "react";
import { TasksDiv } from "./CardStyle";
import Task from "./Task";

const Tasks = () => {
  return (
    <TasksDiv>
      <Task />
      <p>NO TASK TO SHOW</p>
    </TasksDiv>
  );
};

export default Tasks;
