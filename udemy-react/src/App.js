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
        <Person name="max" age="24" />
        {/* can put content in between like below and access by props children  in person.js file*/}
        <Person name="Aleena" age="24" > My Hobbies are: Playing Basketball! </Person>
      </div>
      </div>
    );
  }
}

export default App;
