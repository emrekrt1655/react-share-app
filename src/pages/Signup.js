import React from "react";
import { Button, Grid, TextField, Container
 } from "@material-ui/core";
 import {makeStyles} from '@material-ui/core/styles';
 import {useFormik} from 'formik';

 import firebase from '../firebase/firebase.utils';
 

 const styles = makeStyles({
     wrapper:{
         marginTop: '5rem'
     }
 })

  const handleGoogleButtonClick = () => {
    firebase.useGoogleProvider();
  }

function Signup() {
    const formik = useFormik({
        initialValues: {
          displayName:'',
          email: '',
          password:'',
        },
        onSubmit: values => {
          firebase.register(values.displayName, values.email,values.password);
        },
      });
    const signupStyles =  styles(); //we can take as object to take the codes as signupStyles.wrapper
  return (
    <Container maxWidth='sm' className={signupStyles.wrapper}>
        <form onSubmit={formik.handleSubmit}>
      <Grid container spacing ={3}>
          <Grid item xs = {12}>
      <TextField 
      name='displayName' 
      label="Display Name" 
      variant="outlined" 
      fullWidth 
      value={formik.values.displayName} 
      onChange={formik.handleChange}/>
      </Grid>
      <Grid item xs = {12}>
      <TextField
      name='email'
      label="Email"
      variant="outlined" 
      fullWidth
      value={formik.values.email} 
      onChange={formik.handleChange}
       />
      </Grid>
      <Grid item xs = {12}>
      <TextField 
      name='password' 
      label="Password" 
      variant="outlined" 
      type='password'
      fullWidth
      value={formik.values.password} 
      onChange={formik.handleChange} />
      </Grid>
      <Grid item xs = {12}>
      <Button type='submit' variant="contained" color="primary" fullWidth>
        Register
      </Button>
      </Grid>
      <Grid item xs = {12}>
      <Button variant="contained" color="primary" fullWidth onClick={handleGoogleButtonClick}>
        Signup with Google
      </Button>
      </Grid>
      </Grid>
      </form>
    </Container>
  );
}

export default Signup;
