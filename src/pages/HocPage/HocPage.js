import React, { Component } from 'react'

function Child(props) {
    return <div>Child</div>
}

const foo = Cmp=>{
    return props=>{
        return <Cmp {...props}/>
    }
}

export default class HocPage extends Component {
    
    render() {
        const Foo = foo(foo(Child));
        return (
            <div>
                <h1>HocPage</h1>
                <Foo />
            </div>
        )
    }
}

