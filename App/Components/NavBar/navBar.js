import React from 'react';
import NavWeather from './navWeather.js';

class NavBar extends React.Component {
  render(){
    return (
      <nav>
        <NavWeather weatherData={this.props.weatherData} />
      </nav>
    )
  }
}

export default NavBar;
