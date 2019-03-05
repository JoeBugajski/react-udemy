import React from 'react';
import './App.css';
import Banana from './Person/Person';
// you can import default exports as anything you wish, but remember to capitalize
class App extends React.Component {
  state = {
    persons: [
      { name: 'Joe', age: 36 },
      { name: 'Manu', age: 29 },
      { name: 'Stephan', age: 26 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    console.log('Button clicked!');
    this.setState({persons: [
      { name: newName, age: 37 },
      { name: 'Manu', age: 30 },
      { name: 'Stephan', age: 27 }
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 36 },
        { name: event.target.value, age: 29 },
        { name: 'Stephan', age: 26 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'black',
      color: 'pink',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px'
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Jake the Snake')}>Get older</button>
        <Banana 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          changed={this.nameChangedHandler}>
            My Hobbies: SVG animation, guitar
        </Banana>
        <Banana 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
          click={this.switchNameHandler.bind(this, 'Hogan')}>
            My Hobbies: cycling, cooking, carpentry
        </Banana>
        <Banana 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          changed={this.nameChangedHandler}>
            My Hobbies: reading, eating egg salad
        </Banana>
      </div>
    );
    // You can pass children to a React component in between the opening and closing JSX tags. To render, you'd access children via props, using the key 'children'. {props.children}  In this way, you can pass complex elements like a list, or just a simple string.
    // This is what it looks like without JSX:
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??'))
  }
}

export default App;
