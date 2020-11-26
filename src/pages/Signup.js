import React from "react";
import { Button, Grid, TextField, Container
 } from "@material-ui/core";

function Signup() {
  return (
    <Container maxWidth='sm'>
      <Grid container spacing ={3}>
          <Grid item xs = {12}>
      <TextField id="outlined-basic" label="Display Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs = {12}>
      <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs = {12}>
      <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs = {12}>
      <Button variant="contained" color="primary" fullWidth>
        Submit
      </Button>
      </Grid>
      <Grid item xs = {12}>
      <Button variant="contained" color="primary" fullWidth>
        Signup with Google
      </Button>
      </Grid>
      </Grid>
    </Container>
  );
}

export default Signup;
