import React, { Component } from 'react';
import Naujiena from '../naujiena/naujiena';

class Naujienos extends Component {
    constructor(){
        super()
        this.state = {
            online:false,
            naujienos:null
        }
    }
    componentDidMount() {
        fetch('https://www.lrytas.lt/static/json/top_readview_2.json')
        .then(response => response.json())
        .then(data => this.setState({naujienos:data}));
    }
    render() {
        let naujienosArr = [];
        console.log(this.state.naujienos);
        for (let mode in this.state.naujienos){
            console.log(mode);
            for (let article of this.state.naujienos[mode]){
                console.log(article);
                naujienosArr.push(article);
            }
        }
        console.log(naujienosArr);
        let formedNaujienos = naujienosArr.map(naujiena=>
            <Naujiena
                date={naujiena.date}
                title={naujiena.title}
                src={naujiena.thumb}
                url={naujiena.url}
            />
        );
        return (
            <div>
                <h3 className='py-3 text-center'>Lryto naujienos</h3>
                <div className="row">
                    {formedNaujienos}
                </div>
            </div>
        );
    }
}

export default Naujienos;