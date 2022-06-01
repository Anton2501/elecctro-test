import { IInputProps } from "./types";
import "./style.scss";

function Input({ value, className, onChange, id, type = "text" }: IInputProps) {
  return (
    <input
      type={type}
      value={value}
      className={`input${className ? `${className}` : ""}`}
      onChange={onChange}
      id={id}
    />
  );
}

export default Input;
