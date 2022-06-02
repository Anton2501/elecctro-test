import React from "react";
import Fade from "react-reveal/Fade";
import TodoItem from "../todo-item";
import Checkbox from "../../ui/checkbox";
import Label from "../../ui/label";
import { TodoContext } from "../../todo-context";

import "./style.scss";

function TodosList(): JSX.Element {
  const {
    list,
    onChange,
    onDelete,
    onEdit,
    leaveOnlyChecked,
    setLeaveOnlyChecked,
    headerClickedTimes,
    countClickHeader,
  } = React.useContext(TodoContext);

  return (
    <React.Fragment>
      {list.length > 0 && (
        <h4
          className="todo-list__header"
          onClick={() =>
            countClickHeader(
              headerClickedTimes > 1 ? 0 : headerClickedTimes + 1
            )
          }
        >
          Tasks
          {headerClickedTimes === 1
            ? ": A-Z"
            : headerClickedTimes === 2
            ? ": Z-A"
            : null}
        </h4>
      )}
      {!leaveOnlyChecked &&
        list.map(({ id, label, isCompleted }) => {
          return (
            <TodoItem
              key={id}
              id={id}
              label={label}
              isChecked={isCompleted}
              onChange={onChange}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          );
        })}
      {leaveOnlyChecked &&
        list
          .filter(({ isCompleted }) => !isCompleted)
          .map(({ id, label, isCompleted }) => {
            return (
              <TodoItem
                key={id}
                id={id}
                label={label}
                isChecked={isCompleted}
                onChange={onChange}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            );
          })}
      {list.length > 0 && list.find(({ isCompleted }) => isCompleted) && (
        <Fade bottom>
          <div className="todo-list__check-group">
            <Checkbox
              checked={leaveOnlyChecked}
              onChange={(e) => setLeaveOnlyChecked(e.target.checked)}
              id="#sort-checked"
            />
            <Label id="#sort-checked">Hide completed</Label>
          </div>
        </Fade>
      )}
    </React.Fragment>
  );
}

export default TodosList;
