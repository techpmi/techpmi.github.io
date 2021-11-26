import { Component } from 'react';
import Page from '../Components/Page';
import Input from '../Components/Input';
import { Card } from 'react-bootstrap';

// TODO: Сверстать форму регистрации

class Registration extends Component {
    render() { 
        return (
            <Page type="form" caption="Регистрация">
                <>
                    <h1>Регистрация / <a href="/#/auth">Авторизация</a></h1>
                    <Card.Body>
                        <Input isRequired label="Фамилия"></Input>
                        <Input isRequired label="Имя"></Input>
                        <Input label="Отчество"></Input>
                        <Input isRequired label="Логин"></Input>
                        <Input label="Почта"></Input>
                        <Input isRequired isHidden label="Пароль"></Input>
                        <Input isRequired isHidden label="Кодовое слово"></Input>
                    </Card.Body>
                </>
            </Page>
        );
    }
}
 
export default Registration;