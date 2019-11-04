import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import curList from '../../data/curList';
import rates from '../../data/rates';
import Select from '../select/select';

class App extends Component {
    constructor() {
        super()
        this.state = {
            ratesApi: null,
            rates: require('../../data/ratesApi.json').rates,
            cur1: Object.keys(rates.rates)[0],
            amount: 0,
            cur2: Object.keys(rates.rates)[0],
            result: 0
        }
    }
    // https://hn.algolia.com/api/v1/search?query=redux
    componentDidMount() {
        fetch('https://cors-anywhere.herokuapp.com/https://currencyapi.net/api/v1/rates?key=demo'
            // , {
            //     method: 'GET',
            //     mode: "no-cors",
            //     credentials: "same-origin",
            //     headers: {
            //         'Access-Control-Allow-Credentials': true,
            //         'Access-Control-Allow-Origin': '*',
            //         'Access-Control-Allow-Methods': 'GET',
            //         'Access-Control-Allow-Headers': 'application/json',
            //     }
            // }
        )
            .then(response => response.json())
            .then(data => this.setState({ ratesApi: data.rates }));
    }
    handleSubmit = e => {
        e.preventDefault();
        // console.log (this.state.rates[this.state.cur2]);
        // console.log(temp);
        this.setState({
            result: this.state.amount * this.state.rates[this.state.cur2]
        })
    }
    render() {
        let curArray = Object.entries(require('../../data/curListApi.json').currencies);
        // console.log(curList.currencies)
        console.log(this.state.rates)
        console.log(this.state.ratesApi)
        // console.log(this.state.cur1)
        // console.log(this.state.cur2)
        let select = curArray.map(cur =>
            <Select
                id={cur[0]}
                name={cur[1]}
            />
        );
        return (
            <div className="container">
                <form action="#">
                    <select name="cur1" id="cur1" onChange={e => this.setState({ cur1: e.target.value })}>
                        {select}
                    </select>
                    <input type="text" id="amount" name="amount" placeholder="Amount"
                        value={this.state.amount}
                        onChange={e => this.setState({ amount: e.target.value })}
                    />
                    <select name="cur2" id="cur2" onChange={e => this.setState({ cur2: e.target.value })}>
                        {select}
                    </select>
                    <input type="submit" onClick={e => this.handleSubmit(e)} value="Konvertuoti" />
                    <input type="text" id="result" name="result" placeholder="0"
                        value={this.state.result}
                    />
                </form>
            </div>
        )
    }
}

export default App;