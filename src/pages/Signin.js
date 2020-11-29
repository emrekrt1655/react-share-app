import React from "react";
import { Button, Grid, TextField, Container
 } from "@material-ui/core";
 import {makeStyles} from '@material-ui/core/styles';
 import {Formik} from 'formik';

 import firebase from '../firebase/firebase.utils';
 

 const styles = makeStyles({
     wrapper:{
         marginTop: '5rem'
     }
 })

 const initialValues = {
    email: '',
    password:'',
  }
 
 function Signin() {
     
    const handleGoogleButtonClick = () => {
       firebase.useGoogleProvider();
     }

     const handleFormSubmit = values => {
        alert(JSON.stringify(values, null, 2));
      }

     

    const signinStyles =  styles(); //we can take as object to take the codes as signupStyles.wrapper
  return (
    <Container maxWidth='sm' className={signinStyles.wrapper}>
        <Formik 
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
        >
            {({handleSubmit, handleChange, values})=>(
                <form onSubmit={handleSubmit} >
                <Grid container spacing ={3}>
                <Grid item xs = {12}>
                <TextField
                name='email'
                label="Email"
                variant="outlined" 
                fullWidth
                value={values.email}
                onChange={handleChange}
                 />
                </Grid>
                <Grid item xs = {12}>
                <TextField 
                name='password' 
                label="Password" 
                variant="outlined" 
                type='password'
                fullWidth
                value={values.password}
                onChange={handleChange}
                 />
                </Grid>
                <Grid item xs = {12}>
                <Button type='submit' variant="contained" color="primary" fullWidth>
                  Login
                </Button>
                </Grid>
                <Grid item xs = {12}>
                <Button variant="contained" color="primary" fullWidth onClick={handleGoogleButtonClick}>
                  Sign In with Google
                </Button>
                </Grid>
                </Grid>
                </form>
            )}
        
      </Formik>
    </Container>
  );
}

export default Signin;
