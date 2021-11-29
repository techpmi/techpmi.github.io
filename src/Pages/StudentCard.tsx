import { Component } from 'react';
import Page from '../Components/Page';
import CardTable from '../Components/CardTable'

// TODO: Сверстать карточку студента
const data = [{
    field : 'Дата рождения:',
    value: '01.01.2001'
},  {
    field: 'Ступень образования:',
    value: 'бакалавриат'
},  {
    field: 'Номер студенческого билета:',
    value: ''
},  {
    field: 'Название кафедры:',
    value: ''
},  {
    field: 'Название курсовой/дипломной работы:',
    value: ''
}]

class StudentCard extends Component {
    render() { 
        return (
            <Page type="card" caption="Карточка студента"><CardTable data={data}></CardTable></Page>
        );
    }
}
 
export default StudentCard;