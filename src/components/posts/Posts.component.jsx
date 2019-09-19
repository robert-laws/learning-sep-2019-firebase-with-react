import React, { useContext } from 'react';
import { Row, Col } from 'reactstrap';
import Post from '../Post/Post.component';
import { PostsContext } from '../../providers/PostsProvider';

const Posts = () => {
  const posts = useContext(PostsContext);
  
  return (
    <Row>
      <Col>
        {posts.map(post => (<Post {...post} key={post.id} />))}
      </Col>
    </Row>
  )
}

export default Posts;