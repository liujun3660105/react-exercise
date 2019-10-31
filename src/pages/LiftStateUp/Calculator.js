import React, { Component } from 'react'
import BoilingVerdict from './BoilingVerdict'
import TemeratureInput from './TemeratureInput'

export class Calculator extends Component {
    constructor(props){
        super(props);
        this.state = {temperature: '', scale: 'c'};
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
      }
    
      handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
      }
     toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
      }
      
     toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
      }
     tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
      }
    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
        return (
            <div>
                {/* <input type='text' value={temperature} onChange={this.handleTemChange}></input> */}
                <TemeratureInput 
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}></TemeratureInput>
                <TemeratureInput         
            
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} ></TemeratureInput>
                <BoilingVerdict celsium={parseFloat(temperature)}/>
            </div>

        )
    }
}

export default Calculator
