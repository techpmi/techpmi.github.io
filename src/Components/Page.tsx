import { Component, ReactElement } from 'react';
import CardPage from './Templates/CardPage';
import FormPage from './Templates/FormPage';
import RegistryPage from './Templates/RegistryPage';

interface PageProps {
    caption: string;
    children: ReactElement;
    type: 'registry' | 'card' | 'form';
    backLink: string;
}

class Page extends Component<PageProps> {
    componentDidMount() {
        document.title = this.props.caption;
    }

    componentDidUpdate() {
        document.title = this.props.caption;
    }
      
    render() { 
        switch (this.props.type) {
            case 'registry': {
                return (<RegistryPage backLink={this.props.backLink} caption={this.props.caption}>{this.props.children}</RegistryPage>);
            }
            case 'card': {
                return (<CardPage backLink={this.props.backLink} caption={this.props.caption}>{this.props.children}</CardPage>);
            }
            case 'form': {
                return (<FormPage caption={this.props.caption}>{this.props.children}</FormPage>);
            }
        }
    }
}
 
export default Page;