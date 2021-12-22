import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import useTodoState from "./useTodoState";
import "./styles.css";

export const Todo = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
  console.log(todos);
  return (
    <div className="App">
      <Typography component="h1" variant="h2">
        Todos
      </Typography>

      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      {todos.length > 0 ? (
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      ) : (
        <h1>no todos</h1>
      )}
    </div>
  );
};