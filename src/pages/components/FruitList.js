import React, {useState, useEffect} from 'react'
//显示水果列表
function FruitList({fruits,setFruits}) {
    const delFruit = (delIndex)=>{//删除指定下表元素
        const tem = [...fruits];
        tem.splice(delIndex, 1)
        setFruits(tem)

    }
    return <ul>
        {fruits.map((item, index)=>{
            return <li key = {item} onClick={()=>{delFruit(index)}}>{item}</li>

        })}
    </ul>
}
export default FruitList;