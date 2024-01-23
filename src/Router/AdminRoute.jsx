import React, { useEffect, useState } from 'react';
import Theme from '../Theme/Theme';
import { useSelector } from 'react-redux';
import { currentAdmin } from '../Function/Auth';

const AdminRoute = ({ children }) => {
  const user = useSelector(state => state.user);
  const [adminRole, setAdminRole] = useState(null);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      try {
        const response = await currentAdmin(user.user.token);
        console.log('AdminRoute:', response.data);
        setAdminRole(true);
      } catch (error) {
        setAdminRole(false);
        console.error(error);
      }
    };

    if (user.user.token) {
      fetchAdminStatus();
    }
  }, [user.user.token]);

  if (adminRole === null) {
    // If adminRole is still being determined, you may want to render a loading state.
    return <p>Loading...</p>;
  }

  return user.user.token && adminRole ? (
    <Theme>
      {children}
    </Theme>
  ) : (
    "No Login"
  );
};

export default AdminRoute;
