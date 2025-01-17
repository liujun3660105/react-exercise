import React, { Component } from 'react'
import {LoginButton, LogoutButton} from './LoginType'
import Greeting from '../greeting/Greeting'

export class LoginControl extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false
        };
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }
    handleLogoutClick(){
        this.setState({
            isLoggedIn:false
        })

    }
    handleLoginClick(){
        this.setState({
            isLoggedIn:true
        })

    }
    render() {
        const {isLoggedIn} = this.state;
        let button=isLoggedIn?<LogoutButton onClick={this.handleLogoutClick}/>:<LoginButton onClick={this.handleLoginClick}/>
        return (
            <div>
                <Greeting isLogin={isLoggedIn}></Greeting>
                {button}
            </div>
        )
    }
}

export default LoginControl

