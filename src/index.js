import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application';
import PostsProvider from './providers/PostsProvider';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import UserProvider from './providers/UserProvider';

render(
  <UserProvider>
    <PostsProvider>
      <Application />
    </PostsProvider> 
  </UserProvider>,
  document.getElementById('root')
);
