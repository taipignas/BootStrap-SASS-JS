import React, { Component } from 'react';
import styles from './app.scss';
import Search from '../search/search';
import Weekday from '../weekday/weekday';
import SelectedDay from '../SelectedDay/SelectedDay';
import Kaunas from '../../data/kaunas';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            city: 'kaunas',
            day: 0,
            weather: Kaunas
        }
        this.setDay = this.setDay.bind(this);
        this.changeCity = this.changeCity.bind(this);
    }

    componentDidMount() {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const apistart = 'https://api.meteo.lt/v1/places/';
        const apiend = '/forecasts/long-term';
        fetch(proxy + apistart + this.state.city + apiend)
            .then(response => response.json())
            .then(data => this.setState({ weather: data }));

        const script = document.createElement("script");
        script.src = "https://kit.fontawesome.com/04b00d367c.js";
        script.async = true;
        document.body.appendChild(script);
    }

    setDay(i) {
        this.setState({ day: i });
        console.log(i);
    }

    changeCity(city) {
        this.setState({ city: city });
        console.log(city);
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const apistart = 'https://api.meteo.lt/v1/places/';
        const apiend = '/forecasts/long-term';
        fetch(proxy + apistart + city + apiend)
            .then(response => response.json())
            .then(data => this.setState({ weather: data }));
    }

    render() {

        let weather = this.state.weather;
        console.log(weather);
        console.log(this.state.city)

        let days = [];
        let fetchDate = weather.forecastCreationTimeUtc.split(" ")[0];
        let nextDay;

        // console.log(weather.forecastCreationTimeUtc);
        // console.log(fetchDate);
        // console.log(weather.forecastTimestamps[0]);

        nextDay = fetchDate;
        days.push(nextDay);
        for (let n = 0; n < 7; n++) {
            for (let i = weather.forecastTimestamps.length - 1; i >= 0; i--) {
                if (weather.forecastTimestamps[i].forecastTimeUtc.startsWith(nextDay)) {
                    nextDay = weather.forecastTimestamps[i + 1].forecastTimeUtc.split(" ")[0];
                    days.push(nextDay);
                    break;
                }
            }
        }

        // console.log(days);
        let dayWeather = [];

        for (let day of days) {
            let today = weather.forecastTimestamps.filter(time => time.forecastTimeUtc.split(" ")[0] == day);
            dayWeather.push(today);
        }

        console.log(dayWeather);

        let mins = [];
        let maxs = [];
        let clouds = [];

        for (let day of dayWeather) {
            let minTemp = day[0].airTemperature;
            let maxTemp = day[0].airTemperature;
            let cloud = 0;
            for (let time of day) {
                cloud+=time.cloudCover;
                if (time.airTemperature < minTemp) minTemp = time.airTemperature;
                if (time.airTemperature > maxTemp) maxTemp = time.airTemperature;
            }
            mins.push(minTemp);
            maxs.push(maxTemp);
            clouds.push(cloud/day.length);
            console.log(cloud/day.length);
        }

        let weekdayComponent = [];
        for (let i in days) {
            weekdayComponent.push(
                <Weekday
                    cloud={clouds[i]}
                    date={days[i]}
                    max={maxs[i]}
                    min={mins[i]}
                    i={i}
                    setDay={this.setDay}
                />
            )
        }

        console.log(weather.forecastCreationTimeUtc);

        return (
            <div className="container">
                <Search
                    city={this.state.city}
                    changeCity={this.changeCity}
                />
                <div className="row week">

                    <h1 className='px-3'>{this.state.weather.place.name}</h1>

                    <div className="col-12">
                        <div className="row d-flex flex-nowrap flex-lg-wrap">
                            {weekdayComponent}
                        </div>
                    </div>
                </div>
                <SelectedDay
                    day={days[this.state.day]}
                    daydata={dayWeather[this.state.day]}
                />
                <footer className='row'>
                    <p className='ml-auto'>Last updated: {weather.forecastCreationTimeUtc}</p>
                </footer>
            </div>
        )
    }
}

export default App;