import React from 'react'

export default function SearchBar(props) {
    return (
        <div>
            <input type='text' placeholder='Search...' value={props.value} onChange = {props.handleValueChange}></input>
            <input type='checkbox' onChange = {props.handleCheckChange}></input>
            <span>Only show products in stock</span>
        </div>
    )
}
