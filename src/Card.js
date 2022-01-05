import React, { useState } from "react";
import { ButtonDel, CardContainer, Container, Header } from "./CardStyle";
import Tasks from "./Tasks";
import Form from "./Form";
import { useDispatch } from "react-redux";
import { clearTodoList } from "./redux/actions/todoActions";

const Card = () => {
  const dispatch = useDispatch();
  const [button, setButton] = useState("CLOSE TASK BAR");

  const handleClearList = () => {
    dispatch(clearTodoList());
  };

  const buttonName = () => {
    button === "CLOSE TASK BAR"
      ? setButton("OPEN TASK BAR")
      : setButton("CLOSE TASK BAR");
  };
  return (
    <Container>
      <CardContainer>
        <Header>
          <h1>TODO APP</h1>
          <button
            style={{
              background: button === "CLOSE TASK BAR" ? "purple" : "red",
            }}
            onClick={buttonName}
          >
            {button}
          </button>
        </Header>
        {button === "CLOSE TASK BAR" ? <Form /> : null}
        <Tasks />
        <ButtonDel onClick={handleClearList}>All Tasks Delete</ButtonDel>
      </CardContainer>
    </Container>
  );
};

export default Card;
