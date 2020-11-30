import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Button, Grid, TextField, Container, Avatar, Typography
} from "@material-ui/core";


const stylesFunc = makeStyles((theme)=>({
    wrapper:{
        marginTop: '5rem',
        textAlign:'center'
    },
    avatar:{
    margin: '2rem auto',
    backgroundColor: theme.palette.secondary.main
   }
}))


function Main() {
    const mainStyles = stylesFunc();
    return(
        <Container maxWidth='sm' className={mainStyles.wrapper}>

        <div>
            MAIN PAGE
        </div>
        </Container>
    )
}

export default Main;
