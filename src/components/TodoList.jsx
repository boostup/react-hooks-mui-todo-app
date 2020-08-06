import React, { useContext } from "react";
import { TodosContext } from "../contexts/todos.context";

import { Paper, Divider } from "@material-ui/core";
import { List } from "@material-ui/core";
import Todo from "./Todo";

function TodoList() {
  const { todos } = useContext(TodosContext);

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <div key={todo.id}>
              <Todo {...todo} />
              {i !== todos.length - 1 && <Divider />}
            </div>
          ))}
        </List>
      </Paper>
    );
  return null;
}

export default TodoList;
