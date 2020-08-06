import React from "react";
import { TodosProvider } from "../contexts/todos.context";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./TodoApp.css";

function TodoApp() {
  return (
    <Paper className="App">
      <AppBar color="primary" position="fixed">
        <Toolbar>
          <Typography className="title" color="inherit">
            React Todos With Hooks
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar></Toolbar>
      <Grid container justify="center" className="App-Grid">
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;
