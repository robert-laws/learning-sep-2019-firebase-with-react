import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class AddComment extends Component {
  state = { content: '' };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onCreate(this.state);
    

    this.setState({ content: '' });
  };

  render() {
    const { content } = this.state;
    return (
      <Card body>
        <h5>Add a New Comment</h5>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="content">Content</Label>
            <Input type="text" name="content" id="content" placeholder="Enter a Comment" value={content} onChange={this.handleChange} />
          </FormGroup>
          <Button>Create Comment</Button>
        </Form>
      </Card>
    );
  }
}

export default AddComment;