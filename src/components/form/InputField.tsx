import * as React from "react";

interface InputProps {
  type: string;
  label: string;
  required?: boolean;
}

export const InputField: React.SFC<InputProps> = (props) => (
  <label>
    {props.label}
    <input type={props.type} name={props.label} required={props.required} />
  </label>
);

InputField.defaultProps = { required: false };