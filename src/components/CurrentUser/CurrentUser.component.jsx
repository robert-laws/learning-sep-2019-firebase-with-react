import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardTitle, Button } from 'reactstrap';

import moment from 'moment';

import { signOut } from '../../firebase/firebase-config';

import './CurrentUser.styles.scss';

const CurrentUser = ({ displayName, photoURL, email, createdAt, children }) => {
  return (
    <>
      <Card body className="current-user">         
        {photoURL && <CardImg top width="100%" src={photoURL} alt={displayName} />}
        <CardTitle>
          <Link to="/profile">
            {displayName}
          </Link>
        </CardTitle>
        <CardText>
          <span className="email">{email}</span>
          <span className="created-at">{moment(createdAt.seconds*1000).calendar()}</span>
          <span>{children}</span>
        </CardText>
        <Button color="primary" onClick={signOut}>Sign Out</Button>
      </Card>
    </>
  )
}

CurrentUser.defaultProps = {
  displayName: 'Bob Cobb',
  email: 'bobcobb@net.com',
  photoURL: 'https://placebear.com/300/300',
  createdAt: new Date()
}

export default CurrentUser;