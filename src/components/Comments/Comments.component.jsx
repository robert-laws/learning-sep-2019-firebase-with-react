import React from 'react'
import Comment from '../Comment/Comment.component'
import AddComment from '../AddComment/AddComment.component';

const Comments = ({ comments, onCreate }) => {
  return (
    <section className="Comments">
      <AddComment onCreate={onCreate} />
      {comments.map(comment => <Comment {...comment} key={comment.id} />)}
    </section>
  )
}
export default Comments;