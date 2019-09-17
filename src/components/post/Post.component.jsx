import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardSubtitle, CardFooter } from 'reactstrap';
import { Button, Spinner } from 'reactstrap'
import './Post.styles.scss';

import { firestore } from '../../firebase/firebase-config';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: true
    }
  }  

  render() {
    const { id, title, content, user } = this.props;
    const postRef = firestore.doc(`posts/${id}`);
    const remove = () => {
      postRef.delete();

      this.setState({
        complete: false
      });
    }

    return (
      <Card outline color="info" className="post-card">
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>by {user.displayName}</CardSubtitle>
          <CardText>{content}</CardText>
        </CardBody>
        <CardFooter className="text-right">
          <Button className="post-button" color="danger" onClick={remove}>
            {this.state.complete ? `Delete` : <Spinner color="light" size="sm" />}
          </Button>
        </CardFooter>
      </Card>
    )
  }
}

export default Post;