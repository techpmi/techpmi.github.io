import { Component } from 'react';
import Page from '../Components/Page';
import RegistryTable, { Column } from '../Components/RegistryTable';
import { TData, getStudentsList } from '../DataUtil';
import { studentTableColumns, students } from '../mockdata';

// подумать, нужен ли нам этот интерфейс
interface StudentRegistryData {
    faculty: string;
    fio: string;
    degree: string;
}

interface StudentRegistryPageState {
    pattern: string;
    data?: TData[];
}

// TODO: Сверстать реестр студентов

class StudentRegistry extends Component<{}, StudentRegistryPageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            pattern: '',
        };

        this.handlePressEnter = this.handlePressEnter.bind(this);
    }
    componentDidMount() {
        getStudentsList().then((value: TData[] | undefined) => {
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

            studentTableColumns.forEach((column: Column) => {
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
            <Page type="registry" caption="Реестр студентов" backLink="/#">
                {
                    this.state.data
                    ? 
                    <>
                        <div className="Registry-input-wrapper">
                            <input type="search" className="Registry-input" placeholder="Поиск" onKeyDown={this.handlePressEnter} />
                        </div>
                        <RegistryTable columns={studentTableColumns} data={this.filterData(this.state.data)} link="/#/student-card" />
                    </>
                    : 
                    <></>
                }
            </Page>
        );
    }
}

export default StudentRegistry;