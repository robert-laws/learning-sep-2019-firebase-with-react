import React from 'react';
import { Card, CardBody, CardText, CardTitle } from 'reactstrap';
import moment from 'moment';

const Comment = ({ content, user, createdAt }) => {
  return (
    <Card outline color="info" className="post-card">
      <CardBody>
        <CardTitle>Comment by {user.displayName} at {moment(createdAt).calendar()}</CardTitle>
        <CardText>{content}</CardText>
      </CardBody>
    </Card>
  );
};

Comment.defaultProps = {
  title: 'An Incredibly Hot Take',
  content:
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus est aut dolorem, dolor voluptatem assumenda possimus officia blanditiis iusto porro eaque non ab autem nihil! Alias repudiandae itaque quo provident.',
  user: {
    displayName: 'Bill Murray',
    email: 'billmurray@mailinator.com',
    photoURL: 'https://www.fillmurray.com/300/300',
  },
  createdAt: new Date(),
};

export default Comment;