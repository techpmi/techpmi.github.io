import { Component, FormEvent } from 'react';
import Page from '../Components/Page';
import Input from '../Components/Input';
import { Card } from 'react-bootstrap';
import Button from '../Components/Button';

interface IRegistrationState {
    name: string;
    surname: string;
    patronymic: string;
    login: string;
    email: string;
    password: string;
    codeword: string;
}

class Registration extends Component<{}, IRegistrationState> {
    state = {
        name: '',
        surname: '',
        patronymic: '',
        login: '',
        email: '',
        password: '',
        codeword: ''
    }
    render() { 
        return (
            <Page type="form" caption="Регистрация">
                <Card.Body className="Form-wrapper">
                    <Card.Body className="Form-header-wrapper center">
                        <h1 className="Form-header">РЕГИСТРАЦИЯ / <a className="Form-header-link" href="/#/auth">АВТОРИЗАЦИЯ</a></h1>
                    </Card.Body>
                    <Card.Body className="Form-wrapper">
                        <Input
                            isRequired
                            label="Фамилия"
                            value={this.state.name}
                            onChange={(event: FormEvent<HTMLInputElement>) => {
                                this.setState({name: event.currentTarget.value})
                            }}
                            ></Input>
                        <Input
                            isRequired
                            label="Имя"
                            value={this.state.surname}
                            onChange={(event: FormEvent<HTMLInputElement>) => {
                                this.setState({surname: event.currentTarget.value})
                            }}
                            ></Input>
                        <Input
                            label="Отчество"
                            value={this.state.patronymic}
                            onChange={(event: FormEvent<HTMLInputElement>) => {
                                this.setState({patronymic: event.currentTarget.value})
                            }}
                            ></Input>
                        <Input
                            isRequired
                            label="Логин"
                            value={this.state.login}
                            onChange={(event: FormEvent<HTMLInputElement>) => {
                                this.setState({login: event.currentTarget.value})
                            }}
                            ></Input>
                        <Input
                            label="Почта"
                            value={this.state.email}
                            onChange={(event: FormEvent<HTMLInputElement>) => {
                                this.setState({email: event.currentTarget.value})
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
                        <Input
                            isRequired
                            isHidden
                            label="Кодовое слово"
                            value={this.state.codeword}
                            onChange={(event: FormEvent<HTMLInputElement>) => {
                                this.setState({codeword: event.currentTarget.value})
                            }}
                            ></Input>
                    </Card.Body>
                    <Card.Body className="Form-wrapper center flex-grow-0">
                        <Button onClick={ () => {} } caption="Зарегистрироваться"></Button>
                    </Card.Body>
                </Card.Body>
            </Page>
        );
    }
}
 
export default Registration;