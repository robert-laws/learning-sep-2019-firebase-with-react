import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Post from '../Post/Post.component';
import Comments from '../Comments/Comments.component';

import { firestore } from '../../firebase/firebase-config';
import { collectIdsAndDocs } from '../../utilities/utilities';

class PostPage extends Component {
  state = { post: null, comments: [] }

  get postId() {
    return this.props.match.params.id;
  }

  get postRef() {
    return firestore.doc(`posts/${this.postId}`)
  }

  get commentsRef() {
    return this.postRef.collection('comments');
  }

  unsubscribeFromPost = null;
  unsubscribeFromComments = null;

  componentDidMount = async () => {
    this.unsubscribeFromPost = this.postRef.onSnapshot(snapshot => {
      const post = collectIdsAndDocs(snapshot);
      this.setState({ post });
    })
    
    this.unsubscribeFromComments = this.commentsRef.onSnapshot(snapshot => {
      const comments = snapshot.docs.map(collectIdsAndDocs);
      this.setState({ comments });
    })
  }
  
  componentWillUnmount = () => {
    this.unsubscribeFromPost();
    this.unsubscribeFromComments();
  }

  createComment = (comment) => {
    this.commentsRef.add({
      ...comment
    })
  }

  render() {
    const { post, comments } = this.state;
    return (
      <div>
        
        { post && <Post {...post} />}
        <Comments comments={comments} onCreate={this.createComment} />
        
      </div>
    )
  }
}

export default withRouter(PostPage);