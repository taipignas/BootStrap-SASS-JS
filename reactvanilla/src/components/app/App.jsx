import React, {Component} from 'react';
import Header from '../header/Header';
import Aside from '../aside/Aside';
import Main from '../main/Main';
import styles from './app.scss';

class App extends Component{
    render() {
        return (
            <div className="container">
                <Header />
                <Main />
                <Aside />
            </div>
        )
    }
}

export default App;