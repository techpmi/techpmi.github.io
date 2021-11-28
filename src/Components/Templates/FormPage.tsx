import { Component, ReactElement } from 'react';
import { Card, Container } from 'react-bootstrap';
import './FormPage.css';

interface FormPageProps {
    caption: string;
    children: ReactElement;
}
 
class FormPage extends Component<FormPageProps> {
    render() { 
        return (
            <>
                <div className="Form-background-image"></div>
                <Container className="Form-page">
                    <Card className="Form-Card">
                        {this.props.children}
                    </Card>
                </Container>
            </>
        );
    }
}
 
export default FormPage;
