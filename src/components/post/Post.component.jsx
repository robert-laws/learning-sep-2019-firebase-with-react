import React, { Component } from 'react';
import { Card, CardBody, CardText, CardTitle, CardSubtitle, CardFooter } from 'reactstrap';
import { Button, Spinner } from 'reactstrap'
import './Post.styles.scss';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      complete: true
    }
  }

  handleRemove = (event) => {
    this.setState({
      complete: false
    });

    const id = event.target.value;
    this.props.onRemove(id);
  }

  render() {
    const { id, title, content, user} = this.props;

    return (
      <Card outline color="info" className="post-card">
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <CardSubtitle>by {user.displayName}</CardSubtitle>
          <CardText>{content}</CardText>
        </CardBody>
        <CardFooter className="text-right">
          <Button className="post-button" color="danger" value={id} onClick={this.handleRemove}>
            {this.state.complete ? `Delete` : <Spinner color="light" size="sm" />}
          </Button>
        </CardFooter>
      </Card>
    )
  }
}

export default Post;