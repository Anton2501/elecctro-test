import React from "react";
import Input from "../../ui/input";
import Button from "../../ui/button";
import { TodoContext } from "../../todo-context";
import "./style.scss";

function CreateTodo() {
  const [value, updateValue] = React.useState("");
  const { addTodo } = React.useContext(TodoContext);

  const createTodo = React.useCallback(
    (e: any) => {
      e.preventDefault();
      addTodo(value);
      updateValue("");
    },
    [value, addTodo]
  );

  return (
    <form className="create-todo">
      <Input
        placeholder="Write new task here..."
        value={value}
        onChange={({ target }) => updateValue(target.value)}
        id="type"
      />
      <Button type="submit" onClick={createTodo} disabled={false}>
        Create
      </Button>
    </form>
  );
}

export default CreateTodo;
