import { Component, ReactElement } from 'react';
import { TData } from '../DataUtil';
import './CardTable.css';

interface CardTableProps {
    data : TData[]
}

class CardTable extends Component<CardTableProps> {
    render() { 
        return (<table>{
            this.props.data.map((elem, index) => {
                return <tr className="CardTable-row" key = {index}>     
                    <td>
                        <div className="Row-Field">
                            {elem.field}
                        </div>
                        <div className="Row-Value">
                            {elem.value}
                        </div>
                    </td>
                </tr>
            })
        }
        </table>);
    }
}
 
export default CardTable;