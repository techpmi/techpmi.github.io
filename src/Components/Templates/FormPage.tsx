import { Component, ReactElement } from 'react';
import image from '../../resources/Geometry.png';
import './FormPage.css';

interface FormPageProps {
    caption: string;
    children: ReactElement;
}
 
class FormPage extends Component<FormPageProps> {
    render() { 
        return (<img className='Form-background-image' src={image}/>);
    }
}
 
export default FormPage;