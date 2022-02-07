import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ path, loggedIn, ...props }) => {
  console.log('начало роутинга');
  return loggedIn ? <Route {...props} /> : <Redirect to="/" />
};

export default ProtectedRoute;