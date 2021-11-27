import { Component, ReactElement } from 'react';
import './CardTable.css';

type Tdata = {
    [key:string]:string
}

interface CardTableProps {
    data : Tdata[]
}


class CardTable extends Component<CardTableProps> {
    render() { 
        return this.props.data.map((elem, index) => {
            return <table key = {index}>
                    <tr>
                        <td>
                            {elem.field}
                        </td>
                        <td>
                            {elem.value}
                        </td>
                    </tr>
            </table>
        });
    }
}
 
export default CardTable;