import { Component } from 'react';
import { JsxElement } from 'typescript';

interface FormPageProps {
    caption: string;
    children: JsxElement | Component;
}
 
class FormPage extends Component<FormPageProps> {
    render() { 
        return (<div></div>);
    }
}
 
export default FormPage;