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
}

const MIN_ROWS_AMOUNT = 3;

class RegistryTable extends Component<RegistryTableProps> {
    render() {
        const columnHeaders: ReactNode[] = this.props.columns.map((column: Column) => {
            return <th>{column.caption}</th>;
        });

        const tableData: ReactNode[] = this.props.data.map((row: Record<string, string>) => {
            return (
                <tr>
                    {this.props.columns.map((column: Column) => {
                        return <td>{row[column.field]}</td>;
                    })}
                </tr>
            );
        });

        if (this.props.data.length < MIN_ROWS_AMOUNT) {
            for (let i = this.props.data.length; i <= MIN_ROWS_AMOUNT; i++) {
                tableData.push(
                    <tr>
                        {this.props.columns.map(() => {
                            return <td></td>;
                        })}
                    </tr>
                );
            }
        }

        return (
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
        );
    }
}

export default RegistryTable;