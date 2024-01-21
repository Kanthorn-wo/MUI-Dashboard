import React from 'react';
import { Navigate } from 'react-router-dom';
import Theme from '../Theme/Theme';
const UserRoute = ({ children }) => {

  const isUser = false;

  return isUser ? <Theme>{children}</Theme> : <Navigate to="/login" />;
};

export default UserRoute;
