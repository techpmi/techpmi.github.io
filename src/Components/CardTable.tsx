import { Component, ReactElement } from 'react';
import CardPage from './Templates/CardPage';
import FormPage from './Templates/FormPage';
import RegistryPage from './Templates/RegistryPage';

type TData = {
    [key: string]: string
  }
  
interface CardTableProps {
    data: TData[]
}

class CardTable extends Component<CardTableProps> {      
    render() { 
       return this.props.data.map((elem, index) => {
           return <div key={index}> {elem.key} </div>
       });
    }
}
 
export default CardTable;