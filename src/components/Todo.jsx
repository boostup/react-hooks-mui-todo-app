import React, { useContext, memo } from "react";
import { DispatchContext } from "../contexts/todos.context";
import {
  ListItemText,
  ListItem,
  Checkbox,
  IconButton,
  ListItemSecondaryAction,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useToggleState from "../hooks/useToggleState";
import EditTodoForm from "./EditTodoForm";

function Todo({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggleEditing] = useToggleState(false);
  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditing={toggleEditing} />
      ) : (
        <>
          <Checkbox
            checked={completed}
            onClick={(e) => dispatch({ type: "TOGGLE", id })}
          />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={toggleEditing}>
              <EditIcon aria-label="Edit" />
            </IconButton>
            <IconButton onClick={(e) => dispatch({ type: "REMOVE", id })}>
              <DeleteIcon aria-label="Delete" />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default memo(Todo);
