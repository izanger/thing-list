import React from 'react'
import './Thing.css'
const Thing = (props) => {
    return (
        <li className="Thing">
            <input type="checkbox" value="on"/>
          <div className="details">
            <div className="name" contentEditable="true" data-text="Enter Thing Here">
                {/*{getName(thing.name)}*/}
                {props.thing.name}
            </div>
            <span className="actions">
              <button className="remove" onClick={props.deleteThing} data-id={props.thing.id}>
                <i className="fa fa-trash-o" data-id={props.thing.id}></i>
              </button>
            </span>
          </div>
        </li>
    )
}

// function getName(name) {
//     if(name.length > 0){
//         return name
//     }else{
//         return "<Enter Thing>"
//     }
// }
export default Thing