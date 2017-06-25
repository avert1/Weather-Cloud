import React from 'react';

class NavWeather extends React.Component {
  render(){
    let weatherData = this.props.weatherData;
    return (
      <div className='nav-weather-box'>
          <img src={weatherData.icon} />{weatherData.city}, {weatherData.state}
          <div className='nav-weather-dropdown'>Dropdown</div>
      </div>
    )
  }
}

export default NavWeather;
