import React from 'react';

class CurrWeatherBox extends React.Component {
  constructor(){
    super();
    this.state = {
      weather:null
    };
  }

  render(){
    let weatherData = this.props.weatherData;
    if(weatherData.icon){
      return(
        <div className="weather-container">
          <div className="weather-header">
            Current Weather
            <h6>{`${weatherData.city || 'Mableton'}, ${weatherData.state || 'GA'}`}</h6>
          </div>
          <div className="weather-details">
            <img src={weatherData.icon} />
            <br />
            {weatherData.weather}
          </div>
        </div>
      );
    }
    return (
      <h1>Hello</h1>
    );
  }

  /*componentWillMount(){
    this.setState({
      weather:"Hot",
    });
    let newState = {
      city:'Mableton',
      state:'GA',
      weather:null
    };
    fetch('/api/currentLoc').then(response=>response.json())
    .then(resJson=>{
      newState.city = resJson.city ||newState.city;
      newState.state = resJson.state || newState.state;
    })
    .then(()=>{
      fetch(`https://api.wunderground.com/api/${key.key}/geolookup/conditions/q/${newState.state}/${newState.city}.json`)
        .then(response =>  response.json())
        .then(resJson=>{
          console.log(resJson);
          newState.weather = resJson.current_observation.weather;
          newState.icon = resJson.current_observation.icon_url;
          this.setState(newState);
        });
      });
  }*/
}

export default CurrWeatherBox;
