import React from 'react';
import './App.css';
import Banana from './Person/Person';
// you can import default exports as anything you wish, but remember to capitalize
class App extends React.Component {
  state = {
    persons: [
      { name: 'Joe', age: 36 },
      { name: 'Manu', age: 29 },
      { name: 'Stepan', age: 26 }
    ]
  }

  switchNameHandler = () => {
    console.log('Button clicked!');
    // this.setState
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>My cool button</button>
        <Banana name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: SVG animation, guitar</Banana>
        <Banana name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: cycling, cooking, carpentry</Banana>
        <Banana name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: reading, eating egg salad</Banana>
      </div>
    );
    // You can pass children to a React component in between the opening and closing JSX tags. To render, you'd access children via props, using the key 'children'. {props.children}  In this way, you can pass complex elements like a list, or just a simple string.
    // This is what it looks like without JSX:
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work??'))
  }
}

export default App;
