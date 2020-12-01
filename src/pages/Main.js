import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {makeStyles} from '@material-ui/core/styles';
import { capitalize, Grid, TextField, Container, Avatar, Typography, 
} from "@material-ui/core";
import MediaCard from '../components/MediaCard'


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
    const [userList, setUserList] = useState();
    const mainStyles = stylesFunc();
    const {REACT_APP_API_BASE_URL, REACT_APP_API_TOKEN} = process.env
    const fetchData = async () => {
        const response =  await  axios.get(`${REACT_APP_API_BASE_URL}/user` , {
               headers:{
                   'app-id': REACT_APP_API_TOKEN,
               },
           });
        setUserList(response?.data?.data);
       }
   
    useEffect(()=>{
        fetchData();
    }, []);

    

    return(
        <Container  className={mainStyles.wrapper}>
            <Grid container spacing={1} >
            {userList?.map((user)=> {

                return (
                <Grid item xs={4} key={user?.id}>

                <MediaCard
                    id = {user.id}
                    userImage ={user?.picture} 
                    userName={`${capitalize(user?.title)} ${user?.firstName} ${user?.lastName}`} 
                    userMail={user?.email}>
                    </MediaCard>
                </Grid>
            )})}

            </Grid>
        
      
        </Container>
    )
}

export default Main;
