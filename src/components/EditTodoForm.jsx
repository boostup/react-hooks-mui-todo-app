import React, { useContext } from "react";
import { TodosContext } from "../contexts/todos.context";
import useInputState from "../hooks/useInputState";
import { TextField } from "@material-ui/core";

function EditTodoForm({ id, task, toggleEditing }) {
  const { editTodo } = useContext(TodosContext);
  const [value, setValue, reset] = useInputState(task);

  function handleEvents(e) {
    e.preventDefault();
    editTodo(id, value);
    reset();
    toggleEditing();
  }

  return (
    <form style={{ marginLeft: "1rem", width: "80%" }} onSubmit={handleEvents}>
      <TextField
        value={value}
        onChange={setValue}
        onBlur={handleEvents}
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
