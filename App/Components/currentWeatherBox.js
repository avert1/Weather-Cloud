import React from 'react';

class CurrWeatherBox extends React.Component {
  constructor(){
    super();
    this.state = {
      weather:null
    };
  }

  render(){
    if(this.state.weather){
      return(
        <h1>{this.state.weather}</h1>
      );
    }
    return (
      <h1>Hello</h1>
    );
  }

  componentWillMount(){
    this.setState({
      weather:"Hot"
    })
  }
}

export default CurrWeatherBox;
