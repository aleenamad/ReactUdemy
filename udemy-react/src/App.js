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

  switchNameHandler = (newName) => {
    console.log('was clicked!');
    this.setState({persons: [
      { name: newName, age: 28},
      { name: 'aleeeena', age: 35},
      { name: 'mother', age: 16},
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      { name: 'max', age: 28},
      { name: event.target.value, age: 35},
      { name: 'mother', age: 16},
    ]})
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
    }
    return (
      <div className="App">

        <p className="App-intro">
          hellooooooo
        </p>
        <button  style={style} onClick = {() => this.switchNameHandler("maxxxxxx")}>Switch Name</button>

      <div>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click = {this.switchNameHandler.bind(this, 'ugly')}/>
        {/* can put content in between like below and access by props children  in person.js file*/}
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.nameChangedHandler} > My Hobbies are: Playing Basketball! </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} changed={this.nameChangedHandler} > My Hobbies are: cleaning! </Person>
      </div>
      </div>
    );
  }
}

export default App;
