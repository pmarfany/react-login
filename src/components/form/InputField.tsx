import * as React from "react";
import './inputField.scss';
import {RefObject} from "react";

interface InputProps {
  type: string;
  label: string;
  name: string;
  required?: boolean;

  value: string;
  onChange: (value: string) => void;
}

interface InputFieldState {
  hasValue: boolean;
  hasFocus: boolean;
}

export class InputField extends React.Component<InputProps, InputFieldState> {
  // Default props for the component
  private static defaultProps = { required: false };

  // DOM References
  private label: RefObject<HTMLLabelElement> = undefined;

  constructor(props: InputProps) {
    super(props);
    this.label = React.createRef();
    this.state = {
      hasValue: this.inputHasValue(props.value),
      hasFocus: false,
    };
  }

  private inputHasValue = (value: string) => {
    return value !== '';
  };

  private onInputChange = (e: any) => {
    // Update state
    this.setState({ hasValue: this.inputHasValue(e.target.value) });

    // Send value
    this.props.onChange(e.target.value);
  };

  private onFocus = () => {
    this.setState({ hasFocus: true });
  };

  private onBlur = () => {
    this.setState({ hasFocus: false });
  };

  public render() {
    const inputClassName = 'mdc-text-field__input' + (this.state.hasValue || this.state.hasFocus ?
                           ' mdc-text-field__input--focused' : '');
    const labelClassName = 'mdc-floating-label' + (this.state.hasValue || this.state.hasFocus ?
                           ' mdc-floating-label--float-above' : '');

    return (
      <div className="mdc-text-field">
        <input className={inputClassName}
               type={this.props.type}
               name={this.props.name}
               required={this.props.required}
               value={this.props.value}
               onChange={this.onInputChange}
               onFocus={this.onFocus}
               onBlur={this.onBlur}
        />
        <label className={labelClassName} ref={this.label}>
          {this.props.label}
        </label>
      </div>
    );
  }
}
