import { Component, ReactElement } from 'react';
import { Card } from 'react-bootstrap';
import BackButton from '../../resources/backButton.svg';
import './CardPage.css';

interface CardPageProps {
    caption: string;
    children: ReactElement;
    backLink: string;
}
 
class CardPage extends Component<CardPageProps> {
    render() { 
        return (
            <>
                <div className="Card-background-decor Card-background-decor-top"></div>
                <hr className="Separator-tilted"></hr>
                <a className="Card-header-wrapper" href={this.props.backLink}>
                    <img className="Card-header-back" src={BackButton}/>
                    <div className="Card-header">
                        {this.props.caption}
                    </div>
                </a>
                <div className="Card-page">
                    <Card className="Card-Content">
                        <Card.Body>
                            {this.props.children}
                        </Card.Body>
                    </Card>
                </div>
            </>
        );
    }
}
 
export default CardPage;