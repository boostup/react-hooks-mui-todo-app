import React from "react";
import {
  ListItemText,
  ListItem,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
  Icon,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggle from "../hooks/useToggle";
import EditTodoForm from "./EditTodoForm";

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) {
  const [isEditing, toggleEditing] = useToggle(false);

  return (
    <ListItem style={{ height: "64px" }}>
      {isEditing ? (
        <EditTodoForm
          id={id}
          editTodo={editTodo}
          task={task}
          toggleEditing={toggleEditing}
        />
      ) : (
        <>
          <Checkbox checked={completed} onClick={(e) => toggleTodo(id)} />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={(e) => removeTodo(id)}>
              <DeleteIcon aria-label="Delete" />
            </IconButton>
            <IconButton onClick={toggleEditing}>
              <EditIcon aria-label="Edit" />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
