import * as React from "react";
import {InputField} from './form/InputField';
import {SubmitField} from "./form/SubmitField";
import {IService, Service} from "../lib/services";
import {ServiceCarousel} from "./serviceCarousel/ServiceCarousel";

import './page.scss';

interface IPageProps {}

interface IPageState {
  selectedService: IService;
  username: string;
  password: string;
}

export class Login extends React.Component<IPageProps, IPageState> {

  public constructor(props: IPageProps) {
    super(props);
    this.state = {
      selectedService: Service.getDefaultService(),
      username: '',
      password: '',
    };
  };

  private handleSubmit = (e: any) => {
    console.log('form submit');
    e.preventDefault();
  };

  private onServiceSelect = (selectedService: IService) => {
    this.setState({ selectedService });
  };

  private onInputChange = (key: string) => (value: string) => {
    const dict: any = {};
    dict[key] = value;
    this.setState(dict);
  };

  public render() {
    return (
      <main>
        {/* Header */}
        <header>
          <ServiceCarousel selected={this.state.selectedService} onSelect={this.onServiceSelect} />
          <h1>{this.state.selectedService.name}</h1>
        </header>

        {/* Login form */}
        <form onSubmit={this.handleSubmit}>
          <InputField
            type={'text'}
            label={'Usuario'}
            name={'username'}
            required
            value={this.state.username}
            onChange={this.onInputChange('username')}
          />
          <InputField
            type={'password'}
            label={'Contraseña'}
            name={'password'}
            required
            value={this.state.password}
            onChange={this.onInputChange('password')}
          />
          <SubmitField label={'Acceder'}/>
        </form>
      </main>
    );
  }
};
