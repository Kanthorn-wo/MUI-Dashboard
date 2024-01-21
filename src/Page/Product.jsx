import axios from 'axios'
import React, { useEffect } from 'react'

const Product = () => {

  useEffect(() => {
    // code
    getProduct();
  }, []);

  const getProduct = async () => {
    await axios.get(process.env.REACT_APP_API + '/product')
      .then((res) => {
        console.log('Product:', res.data)
      }).catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>Product</div>
  )
}

export default Product