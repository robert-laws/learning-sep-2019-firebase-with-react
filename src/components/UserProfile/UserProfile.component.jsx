import React, { Component } from 'react';
import { Card } from 'reactstrap';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { firestore, auth, storage } from '../../firebase/firebase-config';

class UserProfile extends Component {
  state = { displayName: '', file: null }
  imageInput = null;

  get uid() {
    return auth.currentUser.uid;
  }

  get userRef() {
    return firestore.doc(`users/${this.uid}`);
  }

  // get file() {
  //   return this.imageInput && this.imageInput.files[0];
  // }

  handleUpload = event => {
    this.setState({ file: event.target.files[0] })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { displayName, file } = this.state;

    if(displayName) {
      this.userRef.update({ displayName })
      this.setState({ displayName: '' })
    }

    if(file) {
      storage
        .ref()
        .child('user-profiles')
        .child(this.uid)
        .child(file.name)
        .put(file)
        .then(response => response.ref.getDownloadURL())
        .then(photoURL => this.userRef.update({ photoURL }));
    }
  }


  render() {
    const { displayName } = this.state;

    return (
      <>
        <Card body>
          <h5>Update User Profile</h5>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="displayName">Display Name</Label>
              <Input type="text" name="displayName" id="displayName" placeholder="Display Name" value={displayName} onChange={this.handleChange} />
            </FormGroup>
            <FormGroup>
              <Label for="imageInput">User Photo</Label>
              <Input type="file" name="imageInput" id="imageInput" ref={ref => this.imageInput = ref} onChange={this.handleUpload} />
            </FormGroup>
            <Button>Update User Profile</Button>
          </Form>
        </Card>
      </>
    )
  }
}

export default UserProfile;