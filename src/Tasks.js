import React from "react";
import { useSelector } from "react-redux";
import { TasksDiv } from "./CardStyle";
import Task from "./Task";

const Tasks = () => {
  const { list } = useSelector((state) => state.todoReducer);
  return (
    <TasksDiv>{list.length > 0 ? <Task /> : <p>NO TASK TO SHOW</p>}</TasksDiv>
  );
};

export default Tasks;
