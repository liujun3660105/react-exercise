import React from 'react'
import {Consumer} from '../../AppContext'
import TopBar from '../components/TopBar'

export default function Child(props) {
    return (
        <div>
            <h1>HomePageContext</h1>
            <TopBar></TopBar>
           
        </div>
    )
}
