import React, { Component } from 'react';
import Person from './person/Person.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <p className="App-intro">
          hellooooooo
        </p>

      <div>
        <Person />
      </div>
      </div>
    );
  }
}

export default App;
