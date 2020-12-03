import React from "react";
import { Button, Grid, TextField, Container, Avatar, Typography
 } from "@material-ui/core";
 import * as Yup from 'yup';
 import {makeStyles} from '@material-ui/core/styles';
 import {Formik} from 'formik';

 import firebase from '../firebase/firebase.utils';
 import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
 

 const styles = makeStyles((theme)=>({
     wrapper:{
         marginTop: '5rem',
         textAlign:'center'
     },
     avatar:{
     margin: '2rem auto',
     backgroundColor: theme.palette.secondary.main
    }
 }))

 const initialValues = {
    email: '',
   
  };

  const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email('Invalid Email').required('Email is required!!')
    .required('No password provided.')
     })
 
 function ForgotPassword() {
     
  

     const handleFormSubmit = values => {
        firebase.forgotPassword(values.email).then((res)=> {
          console.log('res:' +  res);
        });
      }

     

    const forgotPasswordStyles =  styles(); //we can take as object to take the codes as signupStyles.wrapper
  return (
    <Container maxWidth='sm' className={forgotPasswordStyles.wrapper}>
    <Avatar className={forgotPasswordStyles.avatar}>
      <LockOutlinedIcon/>
    </Avatar>
    <Typography variant='h4'>
      Sign In
    </Typography>
        <Formik 
            initialValues={initialValues}
            onSubmit={handleFormSubmit}
            validationSchema={forgotPasswordSchema}
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
                <Button type='submit' variant="contained" color="primary" fullWidth>
                  Submit
                </Button>
                </Grid>
                </Grid>
                </form>
            )}
        
      </Formik>
    </Container>
  );
}

export default ForgotPassword;
