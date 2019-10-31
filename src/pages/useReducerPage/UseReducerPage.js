import React ,{useReducer, useEffect} from 'react'
import FruitList from '../components/FruitList'

function fruitReducer(state=[], action){
    switch(action.type){
        case 'init':
        case 'replace':
            return [...action.payload]
        default:
            return state
    }
}
export default function UseReducerPage() {
    const [fruits, dispatch] = useReducer(fruitReducer,[]);
    useEffect(() => {
        //effect
        setTimeout(()=>{
            dispatch({type:'init', payload:['apple','banana']})

        },1000)
    }, [])
    return (
        <div>
            <h1>UseReducerPage</h1>
            <FruitList fruits = {fruits} setFruits = {newList =>dispatch({type:'replace', payload:newList})}></FruitList>
        </div>
    )
}

