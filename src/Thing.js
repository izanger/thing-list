import React, { Component } from 'react'
import './Thing.css'
import Actions from './Actions'

class Thing extends Component { 
  render() {
    return (
        <li className="Thing">
            <input type="checkbox" value="on"/>
          <div className="details">
            <div className="name" contentEditable="true" data-text="Enter Thing Here">
                {/*{getName(thing.name)}*/}
                {this.props.thing.name}
            </div>
            <Actions thing={this.props.thing} deleteThing={this.props.deleteThing}/>
          </div>
        </li>
    )
  }
}

// function getName(name) {
//     if(name.length > 0){
//         return name
//     }else{
//         return "<Enter Thing>"
//     }
// }
export default Thing