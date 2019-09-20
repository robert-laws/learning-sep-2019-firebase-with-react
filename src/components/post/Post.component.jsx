import React, { useState } from 'react';
import { Card, CardBody, CardText, CardTitle, CardSubtitle, CardFooter } from 'reactstrap';
import { Button, Spinner } from 'reactstrap';
import { FaStar } from 'react-icons/fa';
import './Post.styles.scss';

import { firestore } from '../../firebase/firebase-config';

const Post = ({ id, title, content, user, stars }) => {
  const [complete, setComplete] = useState(true);
  const postRef = firestore.doc(`posts/${id}`);
  const remove = () => {
    postRef.delete();
  }
  const addStar = async () => {
    toggleButton(false);

    await postRef.update({
      stars: stars + 1
    })
    
    toggleButton(true);
  }
  const toggleButton = (boolValue) => {
    setComplete(boolValue)
  }

  return (
    <Card outline color="info" className="post-card">
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>by {user.displayName}</CardSubtitle>
        <CardText>{content}</CardText>
      </CardBody>
      <CardFooter className="footer-section">
        <section>
          <FaStar className="text-warning" /> {stars}
        </section>
        <section>
          <Button className="star-button mr-2" color="primary" onClick={addStar}>
            {complete ? `Add Star` : <Spinner color="light" size="sm" />}
          </Button>
          <Button className="post-button" color="danger" onClick={remove}>
            Delete
          </Button>
        </section>
      </CardFooter>
    </Card>
  )
}

export default Post;