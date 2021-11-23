import { Component } from 'react';
import Page from '../Components/Page';

// TODO: Сверстать карточку кафедры

class DepartmentCard extends Component {
    render() { 
        return (
            <Page type="card" caption="Карточка кафедры"><h1>Карточка кафедры</h1></Page>
        );
    }
}
 
export default DepartmentCard;