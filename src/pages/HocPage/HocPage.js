import React, { Component } from 'react'

// function Child(props) {
//     return <div>Child</div>
// }
const foo = Cmp=>{
    return props=>{
        return <div>111<Cmp {...props}/></div>
    }
}

@foo
class Child extends Component{
    render(){
        return <div>Child</div>
    }
}



export default class HocPage extends Component {
    
    render() {
        // const Foo = foo(foo(Child));
        return (
            <div>
                <h1>HocPage</h1>
                <Child></Child>
            </div>
        )
    }
}

