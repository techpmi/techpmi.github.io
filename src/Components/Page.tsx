import { Component, ReactElement } from 'react';
import FormPage from './Templates/FormPage';

interface PageProps {
    caption: string;
    children: ReactElement;
    type: 'registry' | 'card' | 'form';
}

class Page extends Component<PageProps> {
    render() { 
        switch (this.props.type) {
            case 'registry': {
                return (<FormPage caption={this.props.caption}>{this.props.children}</FormPage>);
            }
            case 'card': {
                return (<div>card</div>);
            }
            case 'form': {
                return (<FormPage caption={this.props.caption}>{this.props.children}</FormPage>);
            }
        }
    }
}
 
export default Page;