import React, { Component } from 'react';
import Table from '../table/table';
import styles from './app.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import https://kit.fontawesome.com/04b00d367c.js



class App extends Component {
    componentDidMount () {
        const script = document.createElement("script");
    
        script.src = "https://kit.fontawesome.com/04b00d367c.js";
        script.async = true;
    
        document.body.appendChild(script);
    }
    render() {
        return (
            <div className="container">
                <Table />
                <div className="row">

                </div>
            </div>
        )
    }
}

export default App;