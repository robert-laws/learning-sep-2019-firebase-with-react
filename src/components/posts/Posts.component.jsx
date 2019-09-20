import React, { useContext } from 'react';
import { Row, Col } from 'reactstrap';
import AddPostForm from '../AddPostForm/AddPostForm.component';
import Post from '../Post/Post.component';
import { PostsContext } from '../../providers/PostsProvider';

const Posts = () => {
  const posts = useContext(PostsContext);
  
  return (
    <>
      <Row>
        <Col>
          <AddPostForm />
        </Col>
      </Row>
      <Row>
        <Col>
          {posts.map(post => (<Post {...post} key={post.id} />))}
        </Col>
      </Row>
    </>
  )
}

export default Posts;