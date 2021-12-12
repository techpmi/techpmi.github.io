import { Component } from 'react';
import CardTable from '../Components/CardTable';
import Page from '../Components/Page';
import { getDepartmentById, TData } from '../DataUtil';

// TODO: Сверстать карточку кафедры

class DepartmentCard extends Component<{}> {
    state = {
        data: null,
        name: ''
    };
    componentDidMount() {
        const id = new URLSearchParams(window.location.href).get('id') || '';
        getDepartmentById(id).then((value: TData | undefined) => {
            this.setState({name: value?.departmentName || '', data: value ? this.prepareData(value): null});
        });
    }
    prepareData(rawData: TData): TData[] {
        return [{
            field: 'Факультет:',
            value: rawData.faculty
        },  {
            field: 'Заведующий кафедрой:',
            value: rawData.headOfDepartment
        }];
    }
    render() { 
        return (
            <Page type="card" caption="Карточка кафедры" backLink="/#/departments">
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
 
export default DepartmentCard;