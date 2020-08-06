import React from "react";
import { Paper, ListItemText, Divider } from "@material-ui/core";
import { List } from "@material-ui/core";
import Todo from "./Todo";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <Todo
                {...todo}
                completed={todo.completed}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i !== todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
