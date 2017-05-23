import React from 'react'
import './Buttons.css'

const Buttons = (props) => {
    return (
        <div>
            <button className="logout">Sign Out</button>
            <button className="add-thing" onClick={props.addThing}>Add Thing</button>
        </div>
    )
}
export default Buttons