// AdminRoute.js
import React, { useEffect, useState } from 'react';
import Theme from '../Theme/Theme';
import { useSelector } from 'react-redux';
import { currentAdmin } from '../Function/Auth';

const AdminRoute = ({ children }) => {
  const user = useSelector(state => state.user);
  const [adminrole, setAdminRole] = useState(false)
  useEffect(() => {

  }, [user])
  try {
    currentAdmin(user.user.token)
      .then((res) => {

        setAdminRole(true)
      }).catch((err) => {
        setAdminRole(false)
        console.log(err)
      })
  } catch (error) {
    console.log('error', error)
  }


  return (
    user && adminrole
      ?
      <Theme>
        {children}
      </Theme>
      : "nologin"
  );
};

export default AdminRoute;
