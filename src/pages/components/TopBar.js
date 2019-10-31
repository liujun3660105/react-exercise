import React, { Component } from 'react'
import {Consumer} from '../../AppContext'
const handleConsumer = Cmp=>{
    return props=>{
    return <Consumer>{ctx=><Cmp {...ctx} {...props}></Cmp>}</Consumer>
    }
}
export class TopBar extends Component {
    render() {
        const Top = handleConsumer(TopBarHandle);
        return <Top></Top>
            // <Consumer>{ctx=><TopBarHandle {...ctx}></TopBarHandle>}</Consumer>

        
    }
}
function TopBarHandle(props) {
    return <div className='tabBar'>{props.user.name}</div>
}

export default TopBar
