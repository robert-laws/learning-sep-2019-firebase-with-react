import React from 'react';
import { Card, CardBody, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import './Post.styles.scss';

const Post = ({title, content, user}) => {
  return (
    <Card outline color="info" className="post-card">
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>by {user.displayName}</CardSubtitle>
        <CardText>{content}</CardText>
      </CardBody>
    </Card>
  )
}

export default Post;