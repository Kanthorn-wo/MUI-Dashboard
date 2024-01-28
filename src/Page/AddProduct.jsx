import React from 'react'
import '../App.css'
import { Container, Grid, Paper, Typography } from '@mui/material';
const AddProduct = () => {

  return (

    <Container>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Title
          </Typography>
          asdasdasdasd
        </Paper>
      </Grid>
    </Container>

  )
}

export default AddProduct