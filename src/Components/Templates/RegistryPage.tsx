import { Component, ReactElement } from 'react';
import { Card, Container } from 'react-bootstrap';
import BackButton from '../../resources/backButton.svg';
import './RegistryPage.css';

interface RegistryPageProps {
    caption: string;
    children: ReactElement;
    backLink: string;
}

class RegistryPage extends Component<RegistryPageProps> {
    render() {
        return (
            <>
                <div className="Registry-background-decor Registry-background-decor-top"></div>
                <div className="Registry-background-decor Registry-background-decor-bottom"></div>
                <hr className="Separator-tilted"></hr>
                <a className="Registry-header-wrapper" href={this.props.backLink}>
                    <img className="Registry-header-back" src={BackButton}/>
                    <div className="Registry-header">
                        {this.props.caption}
                    </div>
                </a>
                <div className="Registry-page">
                    <Card className="Registry-Content">
                        <Card.Body>
                            {this.props.children}
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    }
}

export default RegistryPage;