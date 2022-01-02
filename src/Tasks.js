import React from "react";
import { TasksDiv } from "./CardStyle";
import Task from "./Task";

const Tasks = ({ full, del, taskDone }) => {
  return (
    <TasksDiv>
      <Task full={full} del={del} taskDone={taskDone} />
      {full.length < 1 ? <p>NO TASK TO SHOW</p> : null}
    </TasksDiv>
  );
};

export default Tasks;
