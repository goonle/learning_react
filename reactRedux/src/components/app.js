import React, { Component } from 'react';

import SearchBar from '../containers/serach_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList/>
      </div>
    );
  }
}
