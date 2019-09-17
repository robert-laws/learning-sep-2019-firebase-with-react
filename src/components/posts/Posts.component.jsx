import React from 'react';
import { Row, Col } from 'reactstrap';
import Post from '../Post/Post.component';

const Posts = ({ posts }) => {
  return (
    <Row>
      <Col>
        {posts.map(post => (
          <Post {...post} key={post.id} />
        ))}
      </Col>
    </Row>
  )
}

export default Posts;