import React from 'react';
import { Route } from 'react-router-dom';
import Login from './default';
import Register from './register';

const AuthRoutes = () => {
  return (
    <>
      <Route path="/auth/login" exact component={Login} />
      <Route path="/auth/register" exact component={Register} />
    </>
  );
};

export default AuthRoutes;
