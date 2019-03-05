import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Balthasar Gracian'
    }
  }

  changeUsername = (inputText) => {
    this.setState({
      username: inputText
    })
  }

  

  revertUsername = () => {
    this.setState({
      username: "Balthasar Gracian"
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          changeUsername={this.changeUsername}
          />
        <button onClick={this.revertUsername}>Revert Username</button>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;
