import { ChangeEvent } from "react";

export interface IInputProps {
    value: string;
    className?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
    id: string;
    type?: string;
    placeholder?: string;
}