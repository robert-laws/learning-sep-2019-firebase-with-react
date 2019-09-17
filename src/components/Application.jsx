import React from 'react';
import Posts from './Posts/Posts.component';
import AddPostForm from './AddPostForm/AddPostForm.component';

import { Container, Row, Col } from 'reactstrap';

import { firestore } from '../firebase/firebase-config';
import { collectIdsAndDocs } from '../utilities/utilities';

class Application extends React.Component {
  state = {
    posts: []
  }

  componentDidMount = async () => {
    const snapshot = await firestore.collection('posts').get();

    const posts = snapshot.docs.map(collectIdsAndDocs);

    this.setState({ posts })

    // QuerySnapshot Properties
    //
    // docs - all the documents in the snapshot
    // empty - true/false
    // metadata
    // query - reference to query you fired
    // size - number of documents

    // QuerySnapshot Methods
    //
    // docChanges() - array of changes
    // forEach() - iterates over entire array of snapshots
    // isEqual() - whether it matches another snapshot


    // DocumentSnapshot Properties
    //
    // id - id of the given document
    // exists - true/false
    // metadata
    // ref - reference to the documents location

    // DocumentSnapshot Methods
    //
    // data() - gets all of the fields on the object
    // get() - allows access to a particular property on the object
    // isEqual() - useful for comparisons
  }

  handleCreate = async post => {
    const { posts } = this.state;

    const docRef = await firestore.collection('posts').add(post);
    const doc = await docRef.get();

    const newPost = collectIdsAndDocs(doc);

    this.setState({ posts: [newPost, ...posts]})
  }

  render() {
    const { posts } = this.state;
    return (
      <Container className="App">
        <Row>
          <Col sm="12">
            <h3>Blog Application with Firebase</h3>
          </Col>
        </Row>
        <Row>
          <Col sm="12">
            <AddPostForm onCreate={this.handleCreate} />
          </Col>
        </Row>
        <Posts posts={posts} />
      </Container>
    )
  }
}

export default Application;
