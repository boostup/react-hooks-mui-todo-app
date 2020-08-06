import React, { useContext } from "react";
import { TodosContext } from "../contexts/todos.context";
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
  const { removeTodo, toggleTodo } = useContext(TodosContext);
  const [isEditing, toggleEditing] = useToggleState(false);

  return (
    <ListItem>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditing={toggleEditing} />
      ) : (
        <>
          <Checkbox checked={completed} onClick={(e) => toggleTodo(id)} />
          <ListItemText
            style={{ textDecoration: completed ? "line-through" : "none" }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton onClick={toggleEditing}>
              <EditIcon aria-label="Edit" />
            </IconButton>
            <IconButton onClick={(e) => removeTodo(id)}>
              <DeleteIcon aria-label="Delete" />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
}

export default Todo;
