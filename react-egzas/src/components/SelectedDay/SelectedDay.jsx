import React, { Component } from 'react';

class SelectedDay extends Component {
    render() {

        let hourlyData = [];
        for (let hour of this.props.daydata) {
            let time = hour.forecastTimeUtc.split(" ")[1].slice(0, 5);

            let cloud;
            if (hour.cloudCover < 33) cloud = 'fas fa-cloud-showers-heavy';
            else if (hour.cloudCover < 66) cloud = 'fas fa-cloud-sun';
            else cloud = 'fas fa-sun';

            hourlyData.push(
                <div className='col-4 col-lg-2 border'>
                    <p>{time}</p>
                    <i className={cloud}></i>
                    <p>{hour.airTemperature}°</p>
                </div>
            )
        }

        return (
            <div>
                <h3>{this.props.day}</h3>
                <div className='row d-flex flex-nowrap'>
                    {hourlyData}
                </div>
            </div>

        )
    }
}

export default SelectedDay;