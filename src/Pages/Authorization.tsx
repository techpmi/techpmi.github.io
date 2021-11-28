import { Component, FormEvent } from 'react';
import Page from '../Components/Page';
import Input from '../Components/Input';
import { Card } from 'react-bootstrap';
import Button from '../Components/Button';

interface IAuthorizationState {
    login: string;
    password: string;
}

class Authorization extends Component<{}, IAuthorizationState> {
    state = {
        login: '',
        password: ''
    }
    render() { 
        return (
            <Page type="form" caption="Авторизация">
                <Card.Body className="Form-wrapper">
                    <Card.Body className="Form-header-wrapper center">
                        <h1 className="Form-header">АВТОРИЗАЦИЯ / <a className="Form-header-link" href="/#/reg">РЕГИСТРАЦИЯ</a></h1>
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
                            label="Пароль"
                            value={this.state.password}
                            onChange={(event: FormEvent<HTMLInputElement>) => {
                                this.setState({password: event.currentTarget.value})
                            }}
                            ></Input>
                        <a className="link center mt-5"  href="/#/forget">Забыли пароль?</a>
                    </Card.Body>
                    <Card.Body className="Form-wrapper center  flex-grow-0">
                        <Button onClick={ () => {} } caption="Авторизоваться"></Button>
                    </Card.Body>
                </Card.Body>
            </Page>
        );
    }
}
 
export default Authorization;