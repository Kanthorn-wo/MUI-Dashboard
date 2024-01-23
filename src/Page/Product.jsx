import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Product = () => {
  const user = useSelector(state => state.user);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct(user.user.token);
  }, [user.user.token]);

  const getProduct = async (authtoken) => {
    try {
      const response = await axios.get(process.env.REACT_APP_API + '/product/', {
        headers: {
          authtoken: authtoken
        }
      });
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  return (
    <div>
      {products.length ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell align="right">Detail</TableCell>
                <TableCell align="right">Price</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell component="th" scope="row">
                    {product._id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {product.name}
                  </TableCell>
                  <TableCell align="right">{product.detail}</TableCell>
                  <TableCell align="right">${product.price}</TableCell>

                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default Product;
