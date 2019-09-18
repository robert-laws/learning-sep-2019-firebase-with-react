import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    const { email, password } = this.state;

    return (
      <Card body>
        <h5>Sign In</h5>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="text" name="email" id="email" placeholder="enter your email" value={email} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="enter your password" value={password} onChange={this.handleChange} />
          </FormGroup>
          <Button>Sign In</Button>
          <Button>Sign In with Google</Button>
        </Form>
      </Card>
    )
  }
}

export default SignIn;