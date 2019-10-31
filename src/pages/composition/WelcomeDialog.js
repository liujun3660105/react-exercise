import React from 'react'
function FancyBorder(props) {
    return (
        <div>
            组件复合
            <div className={'FancyBorder-' + props.color}>
                {props.left}
            </div>
            <div className={'FancyBorder-' + props.color}>
                {props.right}
            </div>
        </div>

    )

}

export default function WelcomeDialog() {
    return (

        <FancyBorder color='blue'  left={
            <div>this is left</div>
        }
        right={
            <div>this is right</div>
        }>
            {/* <h1 className="Dialog-title">
                Welcome
      </h1>
            <p className="Dialog-message">
                Thank you for visiting our spacecraft!
      </p> */}
     
        </FancyBorder>

    )
}
