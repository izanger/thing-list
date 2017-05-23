import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import ThingList from './ThingList'

class App extends Component {
  state = {
    things: {
      'thing-1': {id: 'thing-1', name: 'Milk' },
      'thing-2': {id: 'thing-2', name: 'Bread'},
      'thing-3': {id: 'thing-3', name: 'Bibb lettuce'},
      //access a given thing by using this.state.things['thing-1']
    }
  }

  addThing() {
    //bind this, use it in Thing.js - see line 24
  }

  render() {
    return (
      <div className="App">
        <Header />
        <ThingList things={this.state.things} addThing={this.addThing}/>
      </div>
    );
  }
}

export default App;
