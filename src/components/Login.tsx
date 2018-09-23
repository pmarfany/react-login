import * as React from "react";
import {InputField} from './form/InputField';
import {SubmitField} from "./form/SubmitField";
import {ServiceList} from "./serviceList/ServiceList";

import './login.scss';

interface IPageProps {}

interface IPageState {
  username: string;
  password: string;
}

export class Login extends React.Component<IPageProps, IPageState> {

  public constructor(props: IPageProps) {
    super(props);
    this.state = { username: '', password: '' };
  };

  private handleSubmit = (e: any) => {
    console.log('Form submit');
    e.preventDefault();
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
          <ServiceList />
          <h1>Kodi</h1>
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
