import React from 'react';

import CurrentUser from '../CurrentUser/CurrentUser.component';
import SignInAndSignUp from '../SignInAndSignUp/SignInAndSignUp.component';

const Authentication = ({user, loading}) => {
  if (loading) return null;
  
  return (
    <div>
      {user ? <CurrentUser {...user} /> : <SignInAndSignUp />}
    </div>
  )
}

export default Authentication;