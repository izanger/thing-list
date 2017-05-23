import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'
import Buttons from './Buttons'

class App extends Component {
  constructor(){
    super()
    this.state = {
      things: {
        0: {id: 0, name: '' },
        1: {id: 1, name: 'Bread'},
        2: {id: 2, name: 'Bibb lettuce'},
        //access a given thing by using this.state.things['thing-1']
      },
      counter: 3,
    }
    this.addThing = this.addThing.bind(this)
  }

  addThing(ev) {
    //bind this, use it in Thing.js
    const state = {...this.state}
    let c = this.state.counter
    state.things[c] = {id: c, name: ''}
    state.counter++
    this.setState(state)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Buttons addThing={this.addThing}/>
        <ThingList things={this.state.things} />
      </div>
    );
  }
}

export default App;
