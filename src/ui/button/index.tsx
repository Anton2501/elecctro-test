import React from "react";
import { IButtonProps } from "./types";
import './style.scss';

function Button({ className, onClick, type, disabled, children }: IButtonProps) {
    return (
        <button
            type={type ? type : 'button'}
            className={`button${className ? ` ${className}` : ""}`}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default Button;
