import { Component } from 'react';
import Page from '../Components/Page';
import RegistryTable from '../Components/RegistryTable';
import { studentTableColumns, students } from '../mockdata';

// подумать, нужен ли нам этот интерфейс
interface StudentRegistryData {
    faculty: string;
    fio: string;
    degree: string;
}

// TODO: Сверстать реестр студентов

class StudentRegistry extends Component {
    render() { 
        return (
            <Page type="registry" caption="Реестр студентов">
                <RegistryTable columns={studentTableColumns} data={students} />
            </Page>
        );
    }
}
 
export default StudentRegistry;