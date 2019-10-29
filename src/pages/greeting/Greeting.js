import React from 'react'
import {UserGreeting, GuestGreeting} from './TypeGreeting'
function Greeting(props){
    const isLogin = props.isLogin
    if(isLogin){
        return <UserGreeting/>
    }
    return <GuestGreeting/>

    

}
export default Greeting;
