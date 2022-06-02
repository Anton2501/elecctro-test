import React from "react";
import Fade from "react-reveal/Fade";
import TextareaAutosize from "react-textarea-autosize";
import Checkbox from "../../ui/checkbox";
import Label from "../../ui/label";

import { ITodoItem } from "./type";
import "./style.scss";

function TodoItem({
  id,
  label,
  isChecked,
  onChange,
  onDelete,
  onEdit,
}: ITodoItem) {
  const [editing, setEditing] = React.useState(false);
  const [value, setValue] = React.useState(label);

  const onBlurInput = React.useCallback(() => {
    onEdit(value, id);
    setEditing(false);
  }, [id, value, onEdit, setEditing]);

  return (
    <Fade bottom>
      <div className="todo-item">
        <div className="todo-item__check-group">
          <Checkbox checked={isChecked} onChange={onChange} id={id} />
          {editing ? (
            <TextareaAutosize
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={onBlurInput}
              id={id}
              className="todo-item__input"
              autoFocus
            />
          ) : (
            <Label id={id}>{label}</Label>
          )}
        </div>
        <button
          type="button"
          onClick={() => setEditing(true)}
          disabled={false}
          className="todo-item__action-btn"
        >
          Edit
        </button>
        <span className="todo-item__separator">/</span>
        <button
          type="button"
          onClick={() => onDelete(id)}
          disabled={false}
          className="todo-item__action-btn"
        >
          Delete
        </button>
      </div>
    </Fade>
  );
}

export default TodoItem;
