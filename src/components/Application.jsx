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

  unsubscribe = null;

  componentDidMount = async () => {
    this.unsubscribe = firestore.collection('posts').onSnapshot(snapshot => {
      const posts = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ posts });
    })

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

  componentWillUnmount = () => {
    this.unsubscribe();
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
            <AddPostForm />
          </Col>
        </Row>
        <Posts posts={posts} />
      </Container>
    )
  }
}

export default Application;
