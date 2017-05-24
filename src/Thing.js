import React from 'react'
import './Thing.css'
import Actions from './Actions'
const Thing = (props) => {
    return (
        <li className="Thing">
            <input type="checkbox" value="on"/>
          <div className="details">
            <div className="name" contentEditable="true" data-text="Enter Thing Here">
                {/*{getName(thing.name)}*/}
                {props.thing.name}
            </div>
            <Actions thing={props.thing} deleteThing={props.deleteThing}/>
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