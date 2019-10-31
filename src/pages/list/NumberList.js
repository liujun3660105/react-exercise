import React from 'react'

export default function NumberList(props) {
    const numbers = props.numbers;
    const listItem = numbers.map((item,index)=>{
        return (
            <li key={index}>{item}</li>
        )
    })
    return (
        <div>
            <ul>
                {listItem}
            </ul>
        </div>
    )
}
