import { Component, ReactNode } from 'react';
import { Table } from 'react-bootstrap';
import './index.css';

export interface Column {
    caption: string;
    field: string;
}

interface RegistryTableProps {
    columns: Column[];
    data: Record<string, string>[];
    link: string;
}

interface RegistryTableState {
    sortedField: string;
    isSortAscending: boolean;
}

const MIN_ROWS_AMOUNT = 3;

class RegistryTable extends Component<RegistryTableProps, RegistryTableState> {
    constructor(props: RegistryTableProps) {
        super(props);
        this.state = {
            sortedField: '',
            isSortAscending: true,
        };
    }

    setSortedField(field: string): void {
        let { isSortAscending } = this.state;
        if (this.state.sortedField === field) {
            isSortAscending = !isSortAscending;
        }

        this.setState({
            sortedField: field,
            isSortAscending,
        });
    }

    setClassNameForTableHeader(field: string): string | undefined {
        return this.state.sortedField === field
            ? (this.state.isSortAscending ? 'ascending' : 'descending')
            : undefined;
    }

    render() {
        const sortedData = [...this.props.data];
        const { columns } = this.props;
        const { sortedField, isSortAscending } = this.state;

        if (sortedField !== '') {
            sortedData.sort((a, b) => {
                if (a[sortedField] < b[sortedField]) {
                    return isSortAscending ? -1 : 1;
                }
                if (a[sortedField] > b[sortedField]) {
                    return isSortAscending ? 1 : -1;
                }
                return 0;
            });
        }

        const columnHeaders: ReactNode[] = columns.map((column: Column, index: number) => {
            return (
                <th
                    key={index}
                    onClick={() => this.setSortedField(column.field)}
                    className={this.setClassNameForTableHeader(column.field)}
                >
                    {column.caption}
                </th>
            );
        });

        const tableData: ReactNode[] = sortedData.map((row: Record<string, string>, index: number) => {
            return (
                    <tr key={index}>
                        <a href={this.props.link + `?q=URLUtils.searchParams&id=${row.id}`} style={ {display: 'contents'} }>
                            {columns.map((column: Column, index: number) => {
                                return (
                                    <td key={index}>
                                        {row[column.field]}
                                    </td>
                                );
                            })}
                        </a>
                    </tr>
            );
        });

        if (sortedData.length < MIN_ROWS_AMOUNT) {
            for (let i = sortedData.length; i <= MIN_ROWS_AMOUNT; i++) {
                tableData.push(
                    <tr key={i}>
                        {columns.map((column: Column, index: number) => {
                            return <td key={index}></td>;
                        })}
                    </tr>
                );
            }
        }

        return (
            <div className="Registry-scroll">
                <Table className="Registry-Table" striped borderless>
                    <thead>
                        <tr>
                            {columnHeaders}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default RegistryTable;