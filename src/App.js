import React, { useState, useEffect } from "react";
import "./assets/scss/style.scss";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { db } from "./config/firebase";
import firebase from "firebase/app";
import TodoRow from "./components/TodoRow";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

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

  async function getTodos() {
    await db
      .collection("todos")
      .onSnapshot((querySnapshot) =>{
        setTodos(
          querySnapshot.docs.map(function (doc) {
            return {
              id: doc.id,
              todo: doc.data().todo,
              inprogress: doc.data().inprogress,
            };
          })
        );
      })
  }

  useEffect(() => {
    getTodos();
    setLoading(false)
  }, []);

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
        <Button
          variant="contained"
          type="submit"
          onClick={addTodo}
          style={{ display: "none" }}
        >
          OI
        </Button>
      </form>
      <section className="todos--list">
        {!loading &&
          todos.map((item, key) => (
            <TodoRow key={key} todo={item.todo} inprogress={item.inprogress} />
          ))}
      </section>
    </div>
  );
}

export default App;
