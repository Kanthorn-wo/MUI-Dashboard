import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../Store/UserSlice'
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/login');
  };
  return (
    <>
      <h1>Name:{user.user.name}</h1>
      <h1>role:{user.user.role}</h1>
      <h1>active:{user.user.active ? 'true' : 'false'}</h1>
      <p>
        Token:
        <small>
          {user.user.token}
        </small>

      </p>

      <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Dashboard