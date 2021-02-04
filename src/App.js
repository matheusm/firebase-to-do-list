import React, { useState } from "react";
import "./assets/scss/style.scss";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

function App() {
  const [todoInput, setTodoInput] = useState("");

  function addTodo() {}

  return (
    <div className="App">
      <h1>To-do List</h1>

      <form>
        <TextField
          id="input-todo"
          label="Write a Todo"
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <Button type="submit" onClick={addTodo} />
      </form>
    </div>
  );
}

export default App;
