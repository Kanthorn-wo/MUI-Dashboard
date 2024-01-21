import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const useStyles = (() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  animation: {
    animation: '$bounce 2s infinite',
  },
  '@keyframes bounce': {
    '0%, 20%, 50%, 80%, 100%': {
      transform: 'translateY(0)',
    },
    '40%': {
      transform: 'translateY(-30px)',
    },
    '60%': {
      transform: 'translateY(-15px)',
    },
  },
}));

const NotFound404 = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h1" className={classes.animation}>
        404
      </Typography>
      <Typography variant="h4">Page not found</Typography>
      <Typography variant="body1">The page you are looking for might be in another castle.</Typography>
      <Button component={Link} to="/login" variant="contained" color="primary">
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound404;
