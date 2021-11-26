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
        const columnHeaders: ReactNode[] = this.props.columns.map((column: Column, index: number) => {
            return <th key={index}>{column.caption}</th>;
        });

        const tableData: ReactNode[] = this.props.data.map((row: Record<string, string>, index: number) => {
            return (
                <tr key={index}>
                    {this.props.columns.map((column: Column, index: number) => {
                        return <td key={index}>{row[column.field]}</td>;
                    })}
                </tr>
            );
        });

        if (this.props.data.length < MIN_ROWS_AMOUNT) {
            for (let i = this.props.data.length; i <= MIN_ROWS_AMOUNT; i++) {
                tableData.push(
                    <tr key={i}>
                        {this.props.columns.map((column: Column, index: number) => {
                            return <td key={index}></td>;
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