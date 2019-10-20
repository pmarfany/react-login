import * as React from "react";
import {Header} from "./header/Header";
import {InputField} from './form/InputField';
import {SubmitField} from "./form/SubmitField";
import './login.scss';

interface IPageState {
  username: string;
  password: string;
}

const handleSubmit = (e: React.SyntheticEvent) => {
  alert('Form submit');
  e.preventDefault();
};

export const Login: React.SFC = () => {
  const [state, setState] = React.useState<IPageState>({ username: '', password: '' });
  const onInputChange = (key: keyof IPageState) => (value: string) => {
    setState((oldState: IPageState) => ({ ...oldState, [key]: value }));
  };

  return (
    <main>
      <Header />
      <form onSubmit={handleSubmit}>
        <InputField
          type="text"
          label="Usuario"
          name="username"
          required
          value={state.username}
          onChange={onInputChange('username')}
        />
        <InputField
          type="password"
          label="Contraseña"
          name="password"
          required
          value={state.password}
          onChange={onInputChange('password')}
        />
        <SubmitField label="Acceder" />
      </form>
    </main>
  );
};
