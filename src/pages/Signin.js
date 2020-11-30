import React from "react";
import { Button, Grid, TextField, Container
 } from "@material-ui/core";
 import * as Yup from 'yup';
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
  };

  const SigninSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email is required!!'),
    password: Yup.string()
    .required('No password provided.')
    .min(8, 'Password is too short - schold be 8 chars minimum. ')
  })
 
 function Signin() {
     
    const handleGoogleButtonClick = () => {
       firebase.useGoogleProvider();
     }

     const handleFormSubmit = values => {
        firebase.signIn(values.email, values.password);
      }

     

    const signinStyles =  styles(); //we can take as object to take the codes as signupStyles.wrapper
  return (
    <Container maxWidth='sm' className={signinStyles.wrapper}>
        <Formik 
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            validationSchema={SigninSchema}
        >
            {({handleSubmit, handleChange, values, errors})=>(
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
                error={errors.email}
                helperText={errors.email}
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
                error={errors.password}
                helperText={errors.password}
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
