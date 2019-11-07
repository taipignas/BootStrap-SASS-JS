import React, { Component } from 'react';

class Weekday extends Component {
    render() {
        let cloud;
        if (this.props.cloud < 33) cloud = 'fas fa-sun';
        else if (this.props.cloud < 66) cloud = 'fas fa-cloud-sun';
        else cloud = 'fas fa-cloud-showers-heavy';
        return (
            <div className='col-4 col-md-3 col-lg border' onClick={() => this.props.setDay(this.props.i)}>
                <p>{this.props.date}</p>
                <i className={cloud}></i>
                <p className='mb-0'>{this.props.max}°</p>
                <p>{this.props.min}°</p>
            </div>
        )
    }
}

export default Weekday;