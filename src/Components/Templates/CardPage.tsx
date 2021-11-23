import { Component, ReactElement } from 'react';
import { Card, Container } from 'react-bootstrap';
import './CardPage.css';

interface CardPageProps {
    caption: string;
    children: ReactElement;
}
 
class CardPage extends Component<CardPageProps> {
    render() { 
        return (
            <>
                <div className="Card-background-decor Card-background-decor-top"></div>
                <hr className="Separator-tilted"></hr>
                <div className="Card-header">
                    {this.props.caption}
                </div>
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