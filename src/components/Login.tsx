import * as React from "react";
import {InputField} from './form/InputField';
import {SubmitField} from "./form/SubmitField";
import {IService, Service} from "../lib/services";
import {ServiceCarousel} from "./serviceCarousel/ServiceCarousel";

import './page.scss';

interface IPageProps {}

interface IPageState {
  selectedService: IService;
}

export class Login extends React.Component<IPageProps, IPageState> {

  public constructor(props: IPageProps) {
    super(props);
    this.state = { selectedService: Service.getDefaultService() };
  };

  private handleSubmit = (e: any) => {
    console.log('form submit');
    e.preventDefault();
  };

  private onServiceSelect = (selectedService: IService) => {
    this.setState({ selectedService });
  };

  public render() {
    return (
      <main>
        {/* Header */}
        <header>
          <ServiceCarousel selected={this.state.selectedService} onSelect={this.onServiceSelect} />
          <p>{this.state.selectedService.name}</p>
        </header>

        {/* Login form */}
        <form onSubmit={this.handleSubmit}>
          <InputField type={'text'} label={'Usuario'} required />
          <InputField type={'password'} label={'Contraseña'} required />
          <SubmitField label={'Acceder'}/>
        </form>
      </main>
    );
  }
};
