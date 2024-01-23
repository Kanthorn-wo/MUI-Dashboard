import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Store/UserSlice';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

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
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Welcome, {user.user.name}
            </Typography>
            <Typography variant="h6">
              Role: {user.user.role}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              Active: {user.user.active ? 'true' : 'false'}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Token: <small>{user.user.token}</small>
            </Typography>
            <Button variant="contained" color="primary" onClick={handleLogout} style={{ marginTop: '16px' }}>
              Logout
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
