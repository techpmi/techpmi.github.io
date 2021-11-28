import { Component } from 'react';
import '../Components/Templates/MainPage.css'

// TODO: Сверстать главную страницу (Илья Е.)

class Main extends Component {
    componentDidMount() {
        document.title = 'Главная';
    }
    render() { 
        return (
            <div className="main-container">
                <div className="title-container">
                    <h1 className="title">Реестр выпускников</h1>
                </div>
                <a href="/#/auth" className="auth-button">
                    <img src="images/enter.png" alt="" />
                </a>
                <div className="bottom-buttons">
                    <a href="/#/students" className="stud-button">
                        <img src="images/stud.png" alt="" />
                    </a>
                    <a href="/#/departments" className="kaph-button">
                        <img src="images/kaph.png" alt="" />
                    </a>
                </div>
            </div>
        );
    }
}
 
export default Main;