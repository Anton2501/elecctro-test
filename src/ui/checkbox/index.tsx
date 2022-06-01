import React from "react";
import { ICheckboxProps } from "./types";
import { IconCheck } from "./icon";
import './style.scss';

function Checkbox({ checked, className, onChange, id }: ICheckboxProps) {
    const onKeyDown = React.useCallback(
        (e: any) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                onChange(e);
            }
        },
        [onChange]
    );
    return (
        <span className={`checkbox${className ? `${className}` : ""}`}>
            <input
                type="checkbox"
                className="checkbox__input"
                checked={checked}
                id={id}
                onChange={onChange}
            />
            <label className="checkbox__square" htmlFor={id} tabIndex={0} onKeyDown={onKeyDown}>
                {checked && <IconCheck color="#fff" />}
            </label>
        </span>
        
    );
}

export default Checkbox;
