import React, { Component } from 'react';
import Person from './person/Person.js';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'max', age: 28 },
      { name: 'aleena', age: 24},
      { name: 'mom', age: 55}
    ]
  }

  switchNameHandler = () => {
    console.log('was clicked!');
    this.setState({persons: [
      { name: 'maximillion', age: 28},
      { name: 'aleeeena', age: 35},
      { name: 'mother', age: 16},
    ]})
  }
  render() {
    return (
      <div className="App">

        <p className="App-intro">
          hellooooooo
        </p>
        <button onClick = {this.switchNameHandler}>Switch Name</button>

      <div>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        {/* can put content in between like below and access by props children  in person.js file*/}
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > My Hobbies are: Playing Basketball! </Person>
      </div>
      </div>
    );
  }
}

export default App;
