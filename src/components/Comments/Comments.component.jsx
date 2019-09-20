import React from 'react'
import Comment from '../Comment/Comment.component'
import AddComment from '../AddComment/AddComment.component';
import { Row, Col } from 'reactstrap';

const Comments = ({ comments, onCreate }) => {
  return (
    <Row>
      <Col sm="6">
        <AddComment onCreate={onCreate} />
      </Col>
      <Col sm="6">
        <h5>Comments</h5>
        {comments.map(comment => <Comment {...comment} key={comment.id} />)}
      </Col>
    </Row>    
  )
}
export default Comments;