import { ILabelProps } from "./types";
import './style.scss';

function Label({ id, children }: ILabelProps) {
    return (
        <label className="label" htmlFor={id}>
            {children}
        </label>
    );
}

export default Label;