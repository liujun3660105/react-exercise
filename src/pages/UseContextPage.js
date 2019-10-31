import React, {useContext} from 'react'
import {Context} from '../AppContext'

export default function UseContextPage() {
    const ctx = useContext(Context);
    return (
        <div>
            <h1>UseContextPage</h1>
            <p>{ctx.user.name}</p>
        </div>
    )
}
