import React, { useState } from "react";
import "./assets/scss/style.scss";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { db } from "./config/firebase";
import firebase from "firebase/app";

function App() {
  const [todoInput, setTodoInput] = useState("");

  function addTodo(e) {
    e.preventDefault();

    db.collection("todos")
      .add({
        todo: todoInput,
        inprogress: false,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    setTodoInput("");
  }

  return (
    <div className="App">
      <h1>To-do List</h1>

      <form>
        <TextField
          id="input-todo"
          label="Write a Todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <Button variant="contained" type="submit" onClick={addTodo}>
          OI
        </Button>
      </form>
    </div>
  );
}

export default App;
