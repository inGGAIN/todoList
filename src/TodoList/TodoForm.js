import React from "react";
import TextField from "@material-ui/core/TextField";
import UseInputState from "./useInputState";

const todoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = UseInputState();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        saveTodo(value);
        reset();
      }}
    >
      <TextField
        variant="outlined"
        placeholder="Add todo"
        margin="normal" onChange={onChange}
        value={value}
      />
    </form>
  );
};

export default todoForm;
