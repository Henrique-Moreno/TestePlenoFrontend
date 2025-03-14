import { createBrowserRouter } from 'react-router-dom';

import React from 'react'; 
import SignIn from './pages/auth/sign-in';
import SignUp from './pages/auth/sign-up';
import Home from './pages/app/home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: React.createElement(SignIn), 
  },
  {
    path: '/sign-in',
    element: React.createElement(SignIn),
  },
  {
    path: '/sign-up',
    element: React.createElement(SignUp),
  },
  {
    path: '/home',
    element: React.createElement(Home),
  },
]);
