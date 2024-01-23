import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './Page/Dashboard';
import Product from './Page/Product';
import AddProduct from './Page/AddProduct';
import Settings from './Page/Settings';
import Login from './Page/Login';
import User from './Page/User';
import { useDispatch } from 'react-redux';
import { login } from './Store/UserSlice';
import AdminRoute from './Router/AdminRoute';
import UserRoute from './Router/UserRoute';
import { currentUser } from './Function/Auth';
import NotFound404 from './Page/NotFound404';
import Home from './Page/Home';

export default function App() {
  const dispatch = useDispatch();
  const idToken = localStorage.getItem('token');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (idToken) {
          const res = await currentUser(idToken);
          console.log('App.jsx', res.data[0]);
          dispatch(login({
            name: res.data[0].name,
            role: res.data[0].role,
            token: idToken
          }));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [dispatch, idToken]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<AdminRoute><Dashboard /></AdminRoute>} />
          <Route path='/product' element={<AdminRoute><Product /></AdminRoute>} />
          <Route path='/addproduct' element={<AdminRoute><AddProduct /></AdminRoute>} />
          <Route path='/settings' element={<AdminRoute><Settings /></AdminRoute>} />

          <Route path='/user' element={<UserRoute><User /></UserRoute>} />
          <Route path='/login' element={<Login />}></Route>
          <Route path='/' element={<Home />}></Route>

          <Route path='*' element={<NotFound404 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
