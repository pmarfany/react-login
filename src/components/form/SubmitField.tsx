import * as React from "react";
import './submitField.scss';

interface ISubmitProps {
  label: string;
}

export const SubmitField: React.SFC<ISubmitProps> = (props) => (
  <input type={"submit"} value={props.label} />
);