import { Component } from 'react';
import Page from '../Components/Page';

// TODO: Сверстать форму авторизации

class Authorization extends Component {
    render() { 
        return (
            <Page type="form" caption="Авторизация"><h1>Авторизация</h1></Page>
        );
    }
}
 
export default Authorization;