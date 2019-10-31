import React, {useState} from 'react'


export default function FruitAdd(props) {
    const [name, setName] = useState('');
    const addFruit= ()=>{
        props.addFruit(name)
        setName('')
    }
    return (
        <div>
            <input value = {name}  onChange= {event=>setName(event.target.value)}></input>
            {/* <input type='button' onClick={props.addFruit(name)}>点击添加</input> */}
            <button onClick={addFruit}>添加</button>
        </div>
    )
}
