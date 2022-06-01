import React from "react";
import Checkbox from "../../ui/checkbox";
import Label from "../../ui/label";
import Input from "../../ui/input";
import { ITodoItem } from "./type";
import TextareaAutosize from 'react-textarea-autosize';
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

    const inputRef = React.useRef<any>();

    const onEditItem = React.useCallback(() => {
        setEditing(true);
        console.log(inputRef)
        if (inputRef.current && typeof inputRef.current.focus === 'function') {
            inputRef.current.focus();
        }
    }, []);

    const onBlurInput = React.useCallback(() => {
        onEdit(value, id);
        setEditing(false);
    }, [id, value, onEdit, setEditing]);

    return (
        <div className="todo-item">
            <div className="todo-item__check-group">
                <Checkbox checked={isChecked} onChange={onChange} id={id} />
                {editing ? (
                    <TextareaAutosize
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onBlur={onBlurInput} 
                        id={id}
                        ref={inputRef}
                        className="todo-item__input"
                    />
                ) : (
                    <Label id={id}>{label}</Label>
                )}
            </div>
            <button
                type="button"
                onClick={onEditItem}
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
    );
}

export default TodoItem;
