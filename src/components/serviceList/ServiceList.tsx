import * as React from "react";
import Services, {IService} from "../../lib/services";
import {ServiceLogo} from ".//ServiceLogo";
import './serviceList.scss';

export interface IHeaderProps {}

export const ServiceList: React.SFC<IHeaderProps> = () => (
  <div className={'service_list'}>
    {Services.map((service: IService) => (
      <ServiceLogo
        {...service}
        key={`image_${service.id}`}
      />
    ))}
  </div>
);