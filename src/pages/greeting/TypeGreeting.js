import React from 'react'
function UserGreeting(props){
    return <h1>Welcome back! this is User</h1>;
}
function GuestGreeting(props){
    return <h1>you are a guest, pls sign up</h1>;
}
export {UserGreeting, GuestGreeting}