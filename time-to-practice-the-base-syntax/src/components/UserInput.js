import React from 'react';
import { Input, Form } from 'reactstrap';

class UserInput extends React.Component {
  constructor(props){
    super(props);
    this.state={
      inputText: ''
    }
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
  return (
      <Form onSubmit={this.props.changeUsername(this.state.inputText)}>
        <Input 
          name='inputText'
          type='text'
          onChange={this.props.handleInput}
        />
      </Form>
    )
  }
}

export default UserInput;