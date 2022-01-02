import React from "react";
import { FaTimes } from "react-icons/fa";
import { TaskDiv, TaskOut } from "./CardStyle";

const Task = ({ full, del, taskDone }) => {
  return (
    <TaskOut>
      {full.map((full) => {
        return (
          <TaskDiv
            style={{
              textDecoration: full.isDone === true ? "line-through" : "none",
              borderLeft: full.isDone === true ? "8px solid purple" : 0,
            }}
            key={full.id}
            onDoubleClick={() => taskDone(full.id)}
          >
            <h3>
              {full.task}

              <FaTimes color="red" onClick={() => del(full.id)} />
            </h3>
            <p>{full.date}</p>
          </TaskDiv>
        );
      })}
    </TaskOut>
  );
};

export default Task;
