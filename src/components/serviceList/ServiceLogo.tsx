import * as React from "react";
import {IService} from "../../lib/services";

export const ServiceLogo: React.SFC<IService> = (props) => {
  const label = `service service_${props.id}`;

  return (
    <figure
      className={[label, props.selected ? 'selected' : ''].join(' ')}
      key={label}
    />
  );
};

ServiceLogo.defaultProps = { selected: false };