import React, { useState } from "react";
import { ButtonDel, CardContainer, Container, Header } from "./CardStyle";
import Form from "./Form";
import Tasks from "./Tasks";

const Card = () => {
  const [buttonName, setButtonName] = useState("Close Add Task Bar");
  const [full, setFull] = useState([]);

  const input = () => {
    buttonName == "Close Add Task Bar"
      ? setButtonName("Show Add Task Bar")
      : setButtonName("Close Add Task Bar");
  };
  const addFull = ({ task, date, isDone, id }) => {
    setFull([...full, { task, date, isDone, id }]);
  };

  const taskDone = (id) => {
    setFull(full.map((e) => (e.id === id ? { ...e, isDone: !e.isDone } : e)));
  };

  const del = (id) => {
    setFull(full.filter((e) => e.id !== id));
  };

  const AllDel = () => {
    full.length = 0;
    del();
  };

  return (
    <Container>
      <CardContainer>
        <Header>
          <h1>Task Tracker</h1>
          <button
            style={{
              background:
                buttonName == "Close Add Task Bar" ? "red" : "#800080",
            }}
            onClick={input}
          >
            {buttonName}
          </button>
        </Header>
        {buttonName == "Close Add Task Bar" ? <Form addFull={addFull} /> : null}
        <Tasks full={full} del={del} taskDone={taskDone} />

        <ButtonDel onClick={AllDel}>All Tasks Delete</ButtonDel>
      </CardContainer>
    </Container>
  );
};

export default Card;
