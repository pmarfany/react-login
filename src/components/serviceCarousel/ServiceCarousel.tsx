import * as React from "react";
import {IService, Service} from "../../lib/services";
import {ServiceLogo} from "./ServiceLogo";
import './serviceCarousel.scss';

export interface IServiceCarouselProps {
  selected: IService;
  onSelect: (service: IService) => void;
}

export const ServiceCarousel: React.SFC<IServiceCarouselProps> = (props) => {
  const serviceList = Service.getServices().filter((service: IService) => (
    service.id !== props.selected.id
  ));

  const firstHalf = serviceList.slice(0, Math.floor(serviceList.length / 2));
  const secondHalf = serviceList.slice(Math.floor(serviceList.length / 2), serviceList.length);

  return (
    <div className={'service_carousel'}>
      {firstHalf.map((service: IService) => (
        <ServiceLogo
          service={service}
          onClick={props.onSelect}
          key={`image_${service.id}`}
        />
      ))}

      <ServiceLogo
        service={props.selected}
        onClick={props.onSelect}
        selected
        key={`image_${props.selected.id}`}
      />

      {secondHalf.map((service: IService) => (
        <ServiceLogo
          service={service}
          onClick={props.onSelect}
          key={`image_${service.id}`}
        />
      ))}
    </div>
  );
};