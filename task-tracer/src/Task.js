import React from "react";
import { TiDelete, TiEdit } from "react-icons/ti";
import { TaskDiv } from "./CardStyle";
const Task = () => {
  return (
    <TaskDiv>
      <h6>
        Ders Çalış{" "}
        <a>
          {" "}
          <TiDelete />{" "}
        </a>
      </h6>
      <p>
        tarih{" "}
        <a>
          {" "}
          <TiEdit />{" "}
        </a>{" "}
      </p>{" "}
    </TaskDiv>
  );
};

export default Task;
