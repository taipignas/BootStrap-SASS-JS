import React, { Component } from 'react';

class Product extends Component {
    constructor() {
        super()
        this.state = {
            like: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => {
            if (prevState.like == 0) return {like: prevState.like + 1}
            else {return {like: 'jus jau palaikinote'}}
        }
        )
    }
    render() {
        return (
            <div className='col-4'>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
                <p>In Stock: {this.props.stock}</p>
                <p><span onClick={this.handleClick}>LIKE</span>: {this.state.like}</p>
            </div>
        );
    }
}

export default Product;