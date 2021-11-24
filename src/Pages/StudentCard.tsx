import { Component } from 'react';
import Page from '../Components/Page';
import CardTable from '../Components/CardTable';

// TODO: Сверстать карточку студента

const data = [{key: 'temp'}, {key: 'kek'}, {key: 'lol'}, {key: 'lol'}]

class StudentCard extends Component {
    render() { 
        return (
            <Page type="card" caption="Карточка студента"><CardTable data={data}></CardTable></Page>
        );
    }
}
 
export default StudentCard;