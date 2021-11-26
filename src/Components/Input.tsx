import { Component } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import './Input.css';

type TInputProps = {
    value?: string;
    label: string;
    isHidden?: boolean;
    isRequired?: boolean;
}

export default class Input extends Component<TInputProps> {
    
    render() {
        return (
            <InputGroup className="InputGroup">
                <InputGroup.Text className="InputLabel">{this.props.label}{this.props.isRequired?'*':''}:</InputGroup.Text>
                <FormControl className="InputField" value={this.props.value} onInput={()=>{}} type={this.props.isHidden ? 'password' : 'text'}/>
            </InputGroup>
        );
    }
}