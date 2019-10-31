import React, { Component } from 'react'

export class TemeratureInput extends Component {
    constructor(props){
        console.log('构造函数中的props',props);
        super(props);
        this.handleTemChange = this.handleTemChange.bind(this);
    }
    handleTemChange(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        console.log('render函数中的props',this.props);
        const temperature = this.props.temperature;
        return (
            <div>
                <h2>Enter temperature</h2>
                <input value={temperature} onChange={this.handleTemChange}></input>
            </div>
        )
    }
}

export default TemeratureInput

