import { Component } from 'react';
import Page from '../Components/Page';

// TODO: Сверстать карточку студента

class StudentCard extends Component {
    render() { 
        return (
            <Page type="card" caption="Карточка студента"><h1>Карточка студента</h1></Page>
        );
    }
}
 
export default StudentCard;