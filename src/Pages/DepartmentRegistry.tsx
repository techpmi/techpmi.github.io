import { Component } from 'react';
import Page from '../Components/Page';
import RegistryTable from '../Components/RegistryTable';
import { departmentTableColumns, departments } from '../mockdata';

// подумать, нужен ли нам этот интерфейс
interface DepartmentRegistryData {
    faculty: string;
    departmentName: string;
    headOfDepartment: string; 
}

// TODO: Сверстать реестр кафедр

class DepartmentRegistry extends Component {
    render() { 
        return (
            <Page type="registry" caption="Реестр кафедр">
                <RegistryTable columns={departmentTableColumns} data={departments} />
            </Page>
        );
    }
}
 
export default DepartmentRegistry;