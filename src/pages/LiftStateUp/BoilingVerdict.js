import React from 'react'

export default function BoilingVerdict(props) {
    const celsius = props.celsium
    return (
        <div>
            {celsius>=100? <p>The water would boil.</p>: <p>The water would not boil.</p>}
        </div>
    )
}
