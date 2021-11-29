import { Component, ReactElement } from 'react';
import { Card, Container } from 'react-bootstrap';
import './RegistryPage.css';

interface RegistryPageProps {
    caption: string;
    children: ReactElement;
}

class RegistryPage extends Component<RegistryPageProps> {
    render() {
        return (
            <>
                <div className="Registry-background-decor Registry-background-decor-top"></div>
                <div className="Registry-background-decor Registry-background-decor-bottom"></div>
                <hr className="Separator-tilted"></hr>
                <div className="Registry-header">
                    {this.props.caption}
                </div>
                <div className="Registry-page">
                    <Card className="Registry-Content">
                        <Card.Body>
                            <div className="Registry-input-wrapper">
                                <input className="Registry-input" placeholder="Поиск" />
                            </div>
                            {this.props.children}
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    }
}

export default RegistryPage;