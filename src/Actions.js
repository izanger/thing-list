import React from 'react'
import './Actions.css'
const Actions = (props) => {
    return (
        <span className="actions">
            <button className="remove" onClick={props.deleteThing} data-id={props.thing.id}>
            <i className="fa fa-trash-o" data-id={props.thing.id}></i>
            </button>
        </span>
    )
}
export default Actions