import React, { Component } from 'react';
import styles from './search.scss';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            city: 'kaunas'
        }
    }
    render() {
        return (
            <div className='row search'>
                <h1 className='mx-3 mr-auto'>Weather</h1>
                <input type="text" id="city" name="city" placeholder="Ieskoti vietos" className='ml-auto'
                    onChange={e => this.setState({ city: e.target.value })}
                />
                <button onClick={() => this.props.changeCity(this.state.city)}>Ieskoti</button>
            </div>
        )
    }
}

export default Search;