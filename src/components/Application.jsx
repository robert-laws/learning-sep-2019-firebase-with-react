import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import { firestore } from '../firebase/firebase-config';

class Application extends React.Component {
  componentDidMount = () => {
    const posts = firestore.collection('posts').get().then(snapshot => {
      console.log({snapshot})
    }); // retrieves all of the posts collection

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

    

    console.log({ posts })
  }

  render() {
    return (
      <Container className="App">
        <Row>
          <Col sm="12">
            <h3>Blog Application with Firebase</h3>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Application;
