import React, { Component } from 'react'

export class Tick extends Component {
    constructor(props){
        super(props);
        this.state = {date: new Date(),counter:0};

    }
    componentDidMount(){
        console.log(this);
        this.timerID = setInterval(()=>this.tick()
        ,1000)

    }
    componentWillUnmount(){
        clearInterval(this.timerID);

    }
    tick(){
        this.setState({
            date:new Date()
        });
    }
    changeCounter=()=>{
        // this.setState({
        //     counter:this.state.counter+1
        // });
        // this.setState({
        //     counter:this.state.counter+5
        // });
        this.setState((state,props)=>({
            counter:state.counter+1
        }))
        this.setState((state,props)=>({
            counter:state.counter+5
        }))
    }
    render() {
        const {date,counter} = this.state;
        return (
            <div>
                <h1>Hello,Tick</h1>
                <h2>Tt is {date.toLocaleTimeString()}.</h2>
                <h2>{counter}</h2>
                <button onClick={this.changeCounter}>+1</button>
               
            </div>
        )
    }
}

export default Tick
