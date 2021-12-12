import { Component } from 'react';
import Page from '../Components/Page';
import CardTable from '../Components/CardTable'
import { getStudentById, type TData  } from '../DataUtil';
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

class StudentCard extends Component<{}, {data: TData[] | null, name: string}> {
    state = {
        data: null,
        name: ''
    };
    componentDidMount() {
        const id = new URLSearchParams(window.location.href).get('id') || '';
        getStudentById(id).then((value: TData | undefined) => {
            this.setState({name: value?.fio || '', data: value ? this.prepareData(value): null});
        });
    }
    prepareData(rawData: TData): TData[] {
        return [{
            field: 'Дата рождения:',
            value: rawData.birth
        },  {
            field: 'Ступень образования:',
            value: rawData.degree
        },  {
            field: 'Номер студенческого билета:',
            value: rawData.id
        },  {
            field: 'Название кафедры:',
            value: rawData.department
        },  {
            field: 'Название курсовой/дипломной работы:',
            value: rawData.paperName
        }];
    }
    render() { 
        return (
            <Page type="card" caption="Карточка студента" backLink="/#/students">
                {
                    this.state.data
                    ? 
                    <>
                        <h3 className="Card-header-name">{this.state.name}</h3>
                        <CardTable data={this.state.data}/>
                    </>
                    : 
                    <></>
                }
            </Page>
        );
    }
}
 
export default StudentCard;