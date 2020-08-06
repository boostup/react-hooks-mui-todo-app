import React from "react";
import { TextField } from "@material-ui/core";
import useInputState from "../hooks/useInputState";

function EditTodoForm({ id, editTodo, task, toggleEditing }) {
  const [value, setValue, reset] = useInputState(task);

  return (
    <form
      style={{ marginLeft: "1rem", width: "80%" }}
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditing();
      }}
    >
      <TextField
        value={value}
        onChange={setValue}
        margin="normal"
        fullWidth
        autoFocus
      >
        adas
      </TextField>
    </form>
  );
}

export default EditTodoForm;
