import * as React from "react";
import {IService} from "../../lib/services";

interface IServiceLogo {
  service: IService;
  onClick: (service: IService) => void;
  selected?: boolean;
}

export const ServiceLogo: React.SFC<IServiceLogo> = (props) => {
  const label = `service service_${props.service.id}`;
  const onClick = () => props.onClick(props.service);

  return (
    <figure
      className={[label, props.selected ? 'selected' : ''].join(' ')}
      key={label}
      onClick={onClick}
    />
  );
};

ServiceLogo.defaultProps = { selected: false };