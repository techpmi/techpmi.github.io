import { Component } from 'react';
import Page from '../Components/Page';
import RegistryTable, { Column } from '../Components/RegistryTable';
import { getDepartmentsList, TData } from '../DataUtil';
import { departmentTableColumns, departments } from '../mockdata';

// подумать, нужен ли нам этот интерфейс
interface DepartmentRegistryData {
    faculty: string;
    departmentName: string;
    headOfDepartment: string;
}

interface DepartmentRegistryPageState {
    pattern: string;
    data?: TData[];
}

// TODO: Сверстать реестр кафедр

class DepartmentRegistry extends Component<{}, DepartmentRegistryPageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            pattern: '',
        };

        this.handlePressEnter = this.handlePressEnter.bind(this);
    }

    componentDidMount() {
        getDepartmentsList().then((value: TData[] | undefined) => {
            this.setState({data: value});
        });
    }
    handlePressEnter(event: any): void {
        if (event.key === 'Enter') {
            this.setState({
                pattern: event.target.value.toLowerCase(),
            });
        }
    }

    filterData(data: Record<string, string>[]): Record<string, string>[] {
        return data.filter((row: Record<string, string>) => {
            let isAnyFieldMatchesPattern: boolean = false;

            departmentTableColumns.forEach((column: Column) => {
                const field = row[column.field];
                if (field.toLowerCase().indexOf(this.state.pattern) !== -1) {
                    isAnyFieldMatchesPattern = true;
                }
            });
            return isAnyFieldMatchesPattern;
        });
    }

    render() {
        return (
            <Page type="registry" caption="Реестр кафедр" backLink="/#">
                 {
                    this.state.data
                    ? 
                    <>
                        <div className="Registry-input-wrapper">
                            <input className="Registry-input" placeholder="Поиск" onKeyDown={this.handlePressEnter} />
                        </div>
                        <RegistryTable columns={departmentTableColumns} data={this.filterData(this.state.data)} link="/#/department-card"/>
                    </>
                    : 
                    <></>
                }
            </Page>
        );
    }
}

export default DepartmentRegistry;