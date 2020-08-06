import React, { useContext } from "react";
import { Paper, TextField } from "@material-ui/core";
import useInputState from "../hooks/useInputState";
import { TodosContext } from "../contexts/todos.context";

function TodoForm() {
  const { addTodo } = useContext(TodosContext);
  const [value, setValue, reset] = useInputState("");

  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={setValue}
          margin="normal"
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}

export default TodoForm;
