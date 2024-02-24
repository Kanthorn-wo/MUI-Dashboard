import React from 'react';
import { Navigate } from 'react-router-dom';

const UserRoute = ({ children }) => {
  const isUser = true;

  return (
    isUser ? <>{children}</> : <Navigate to="/login" />
  )
};

export default UserRoute;
