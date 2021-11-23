import { Component } from 'react';
import Page from '../Components/Page';

// TODO: Сверстать реестр студентов

class StudentRegistry extends Component {
    render() { 
        return (
            <Page type="registry" caption="Реестр студентов"><h1>Реестр студентов</h1></Page>
        );
    }
}
 
export default StudentRegistry;