import { Component } from 'react';
import Page from '../Components/Page';

// TODO: Сверстать реестр кафедр

class DepartmentRegistry extends Component {
    render() { 
        return (
            <Page type="registry" caption="Реестр кафедр"><h1>Реестр кафедр</h1></Page>
        );
    }
}
 
export default DepartmentRegistry;