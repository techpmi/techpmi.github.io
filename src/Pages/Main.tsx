import { Component } from 'react';

// TODO: Сверстать главную страницу (Илья Е.)

class Main extends Component {
    componentDidMount() {
        document.title = 'Главная';
    }
    render() { 
        return (
            <h1>Главная</h1>
        );
    }
}
 
export default Main;