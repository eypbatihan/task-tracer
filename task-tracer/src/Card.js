import React, { useState } from "react";
import { ButtonDel, CardContainer, Container, Header } from "./CardStyle";
import Form from "./Form";
import Tasks from "./Tasks";

const Card = () => {
  const [buttonName, setButtonName] = useState("Show Add Task Bar");

  const input = () => {
    buttonName == "Close Add Task Bar"
      ? setButtonName("Show Add Task Bar")
      : setButtonName("Close Add Task Bar");
  };

  return (
    <Container>
      <CardContainer>
        <Header>
          <h1>Task Tracker</h1>
          <button onClick={input}>{buttonName}</button>
        </Header>
        {buttonName == "Close Add Task Bar" ? <Form /> : null}
        <Tasks />
        <ButtonDel>All Tasks Delete</ButtonDel>
      </CardContainer>
    </Container>
  );
};

export default Card;
