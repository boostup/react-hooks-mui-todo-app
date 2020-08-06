import React, { useContext } from "react";
import { DispatchContext } from "../contexts/todos.context";
import useInputState from "../hooks/useInputState";
import { TextField } from "@material-ui/core";

function EditTodoForm({ id, task, toggleEditing }) {
  const dispatch = useContext(DispatchContext);
  const [value, setValue, reset] = useInputState(task);

  function handleEvents(e) {
    e.preventDefault();
    dispatch({ type: "UPDATE", id, newTask: value });
    reset();
    toggleEditing();
  }

  return (
    <form style={{ marginLeft: "1rem", width: "80%" }} onSubmit={handleEvents}>
      <TextField
        value={value}
        onChange={setValue}
        // onBlur={handleEvents}
        margin="normal"
        fullWidth
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
