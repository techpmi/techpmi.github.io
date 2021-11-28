import { Component, FormEvent, FormEventHandler } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './Input.css';

type TInputProps = {
    value?: string;
    label?: string;
    isHidden?: boolean;
    isRequired?: boolean;
    onChange?: FormEventHandler;
}

export default class Input extends Component<TInputProps> {
    
    render() {
        return (
            <InputGroup className="InputGroup">
                <InputGroup.Text
                    className="InputLabel">{ this.props.label }{ this.props.isRequired ? '*' : '' }:
                </InputGroup.Text>
                <FormControl
                    className="InputField"
                    value={this.props.value}
                    onChange={(event: FormEvent) => {
                        this.props.onChange && this.props.onChange(event);
                    }}
                    type={this.props.isHidden ? 'password' : 'text'}
                />
            </InputGroup>
        );
    }
}