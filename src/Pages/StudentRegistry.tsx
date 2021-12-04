import { Component } from 'react';
import Page from '../Components/Page';
import RegistryTable, { Column } from '../Components/RegistryTable';
import { studentTableColumns, students } from '../mockdata';

// подумать, нужен ли нам этот интерфейс
interface StudentRegistryData {
    faculty: string;
    fio: string;
    degree: string;
}

interface StudentRegistryPageState {
    pattern: string;
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
            <Page type="registry" caption="Реестр студентов">
                <>
                    <div className="Registry-input-wrapper">
                        <input type="search" className="Registry-input" placeholder="Поиск" onKeyDown={this.handlePressEnter} />
                    </div>
                    <RegistryTable columns={studentTableColumns} data={this.filterData(students)} />
                </>
            </Page>
        );
    }
}

export default StudentRegistry;