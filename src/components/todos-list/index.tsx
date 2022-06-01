import React from "react";
import TodoItem from "../todo-item";
import { TodoContext } from "../../todo-context";
import Fade from 'react-reveal/Fade';

import "./style.scss";

function TodosList(): JSX.Element {
  const { list, onChange, onDelete, onEdit } = React.useContext(TodoContext);
  console.log(list);
  return (
    <React.Fragment>
      <h4 className="todo-list__header">Tasks</h4>
      {list.map(({ id, label, isCompleted }) => {
        return (
          <Fade bottom key={id}>        
            <TodoItem
              id={id}
              label={label}
              isChecked={isCompleted}
              onChange={onChange}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          </Fade>
        );
      })}
    </React.Fragment>
  );
}

export default TodosList;
