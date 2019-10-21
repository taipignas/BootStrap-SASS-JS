import React, { Component } from 'react';
import Header from '../header/Header';
import Aside from '../aside/Aside';
import Main from '../main/Main';
import Nav from '../nav/Nav';
import styles from './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <div className="row">
                    <Main />
                    <Nav />
                </div>
            </div>
        )
    }
}

export default App;