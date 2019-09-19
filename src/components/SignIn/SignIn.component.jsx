import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { auth, signInWithGoogle, getUserDocument } from '../../firebase/firebase-config';

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

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      const { user } = await auth.signInWithEmailAndPassword(email, password);
      
      getUserDocument(user.uid);
    } catch (error) {
      console.error(error);
    }

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
            <Input type="text" name="email" id="signInEmail" placeholder="enter your email" value={email} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="signInPassword" placeholder="enter your password" value={password} onChange={this.handleChange} />
          </FormGroup>
          <Button className="mr-2">Sign In</Button>
          <Button onClick={signInWithGoogle}>Sign In with Google</Button>
        </Form>
      </Card>
    )
  }
}

export default SignIn;