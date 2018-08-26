import * as React from "react";

interface ISubmitProps {
  label: string;
}

export const SubmitField: React.SFC<ISubmitProps> = (props) => (
  <input type={"submit"} value={props.label} />
);