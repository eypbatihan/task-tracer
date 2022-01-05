import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { TaskDiv, TaskOut } from "./CardStyle";
import { deleteTodo, toggleTodo } from "./redux/actions/todoActions";

const Task = () => {
  const { list } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  return (
    <TaskOut>
      {list.map((todo) => (
        <TaskDiv
          style={{
            textDecoration: todo.completed === true ? "line-through" : null,
            borderLeft: todo.completed === true ? "8px solid purple" : "none",
          }}
          key={todo.id}
          onDoubleClick={() => dispatch(toggleTodo(todo.id))}
        >
          <h3>
            {" "}
            {todo.text}
            <FaTimes
              style={{ color: "red" }}
              onClick={() => dispatch(deleteTodo(todo.id))}
            />
          </h3>
          <p>{todo.date}</p>
        </TaskDiv>
      ))}
    </TaskOut>
  );
};

export default Task;
