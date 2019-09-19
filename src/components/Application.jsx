import React from 'react';
import Posts from './Posts/Posts.component';
import AddPostForm from './AddPostForm/AddPostForm.component';
import Authentication from './Authentication/Authentication.component';

import { Container, Row, Col } from 'reactstrap';

class Application extends React.Component {
 
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

  render() {    
    return (
      <Container className="App">
        <Row>
          <Col sm="12">
            <h3>Blog Application with Firebase</h3>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <Authentication />
          </Col>
          <Col sm="8">
            <AddPostForm />
          </Col>
        </Row>
        <Posts />
      </Container>
    )
  }
}

export default Application;
