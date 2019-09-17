import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { firestore } from '../../firebase/firebase-config';

class AddPostForm extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault();

    const { title, content } = this.state;

    const post = {
      title,
      content,
      user: {
        uid: 5678,
        displayName: 'Hal Hope'
      }
    }

    firestore.collection('posts').add(post);
    
    this.setState({
      title: '',
      content: ''
    })
  }

  render() {
    const { title, content } = this.state;

    return (
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <h5>Add a New Post</h5>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" name="title" id="title" placeholder="enter a title" value={title} onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="content">Content</Label>
            <Input type="text" name="content" id="content" placeholder="enter some content" value={content} onChange={this.handleChange} />
          </FormGroup>
          <Button>Add New Post</Button>
        </Form>
      </Card>
    )
  }
}

export default AddPostForm;