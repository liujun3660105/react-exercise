import React, {useState, useEffect}from 'react'
import FruitList from '../components/FruitList'
import FruitAdd from '../components/FruitAdd'
export default function HookPage() {
    
    const [counter, setCounter] = useState(0);
    const [fruits,setFruits] = useState(['apple','banana']);
    const handleCounter = ()=>{
        setCounter(counter+1)
    }
    // function handleCounter(){
    //     setCounter(counter+1)
    // }

    return (
        <div>
            <h1>HooksPage</h1>
            {/* <p>{useClock(counter).toLocaleTimeString()}</p> */}
            <div onClick = {handleCounter}>{counter}</div>
            <FruitAdd addFruit = {name=>setFruits([...fruits, name])}></FruitAdd>
            <FruitList fruits = {fruits} setFruits = {setFruits}></FruitList>
        </div>
        )
        
}

function useClock(counter){//自定义hook 前面必须用use，并且后面第一个字母大写
    const [data, setDate] = useState(new Date());
    useEffect(()=>{
        console.log(11);
        const timer = setInterval(()=>{
            setDate(new Date());
        },1000);
        return ()=>{
            clearInterval(timer);
        }
    },[counter])
    return data
}