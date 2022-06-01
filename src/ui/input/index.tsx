import React from "react";
import { IInputProps } from "./types";
import "./style.scss";

const Input = React.forwardRef((props: IInputProps, ref: any) => {
  const {
    value,
    className,
    onChange,
    onBlur,
    id,
    type = "text",
    placeholder,
  } = props;
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={`input${className ? ` ${className}` : ""}`}
      onChange={onChange}
      onBlur={onBlur}
      id={id}
      ref={ref}
    />
  );
});

// function Input({ value, className, onChange, onBlur, id, type = "text", placeholder }: IInputProps) {
//   return (
//     <input
//       type={type}
//       value={value}
//       placeholder={placeholder}
//       className={`input${className ? `${className}` : ""}`}
//       onChange={onChange}
//       onBlur={onBlur}
//       id={id}
//     />
//   );
// }

export default Input;
