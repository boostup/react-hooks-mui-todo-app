import React from "react";
import useTodoState from "../hooks/useTodoState";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

function TodoApp() {
  const initialTodos = [{ id: 1, task: "Pet a Monkey", completed: false }];

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  return (
    <Paper
      className="App"
      style={{
        padding: 0,
        margin: 0,
        height: 0,
        backgroundColor: "#fafafa",
      }}
    >
      <AppBar color="primary" position="fixed" style={{ height: "64px" }}>
        <Toolbar>
          <Typography className="title" color="inherit">
            React Todos With Hooks
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <Grid container justify="center" style={{ marginTop: "1rem" }}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
