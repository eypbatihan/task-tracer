import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1000px;

  background: linear-gradient(
    90deg,
    hsla(211, 66%, 87%, 1) 0%,
    hsla(348, 67%, 88%, 1) 50%,
    hsla(272, 26%, 72%, 1) 100%
  );
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 5px double purple;
  border-radius: 1rem;
  width: 300px;
  padding: 1rem;
  margin: 2rem 0;
  background: linear-gradient(
    90deg,
    hsla(211, 96%, 62%, 1) 0%,
    hsla(295, 94%, 76%, 1) 100%
  );

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.1px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0.5rem 0;
  color: purple;

  button {
    width: 150px;
    padding: 4px;
    border: none;
    background: purple;
    color: white;
    cursor: pointer;
  }
`;
export const TaskBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  button {
    background: purple;
    color: white;
    border-radius: 0.3rem;
    border: none;
    padding: 4px;
    cursor: pointer;
  }
`;
export const FormInput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  input {
    margin: 0.5rem 0;
  }
`;
export const TasksDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TaskOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskDiv = styled.div`
  display: flex;
  margin: 0.5rem;
  padding: 0 0.7rem;
  flex-direction: column;
  background: #fee089;
  border-radius: 0.3rem;
  width: 280px;
  cursor: pointer;

  h3 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.1px;
  }
`;
export const ButtonDel = styled.button`
  background: red;
  color: white;
  border: none;
  padding: 0.3rem;
  border-radius: 0.3rem;
  cursor: pointer;
`;
