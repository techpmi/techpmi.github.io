import { Component, FormEvent } from 'react';
import Page from '../Components/Page';
import Input from '../Components/Input';
import { Card } from 'react-bootstrap';
import Button from '../Components/Button';

interface IAuthorizationState {
    login: string;
    password: string;
    codeword: string;
}

class ForgetPassword extends Component {
    state = {
        login: '',
        password: '',
        codeword: ''
    }
    render() { 
        return (
            <Page type="form" caption="Реристрация">
                <Card.Body className="Form-wrapper">
                    <Card.Body className="Form-header-wrapper center">
                        <h1 className="Form-header">СМЕНА ПАРОЛЯ</h1>
                    </Card.Body>
                    <Card.Body className="Form-wrapper">
                        <Input
                            isRequired
                            label="Логин"
                            value={this.state.login}
                            onChange={(event: FormEvent<HTMLInputElement>) => {
                                this.setState({login: event.currentTarget.value})
                            }}
                            ></Input>
                        <Input
                            isRequired
                            isHidden
                            label="Кодовое слово"
                            value={this.state.codeword}
                            onChange={(event: FormEvent<HTMLInputElement>) => {
                                this.setState({codeword: event.currentTarget.value})
                            }}
                            ></Input>
                        <Input
                            isRequired
                            isHidden
                            label="Новый пароль"
                            value={this.state.password}
                            onChange={(event: FormEvent<HTMLInputElement>) => {
                                this.setState({password: event.currentTarget.value})
                            }}
                            ></Input>
                    </Card.Body>
                    <Card.Body className="Form-wrapper center  flex-grow-0">
                        <Button onClick={ () => {} } caption="Сменить пароль"></Button>
                    </Card.Body>
                </Card.Body>
            </Page>
        );
    }
}
 
export default ForgetPassword;