import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

    console.log(userList)

    return(
        <Container maxWidth='sm' className={mainStyles.wrapper}>

        <div>
            MAIN PAGE
            {userList?.map((user)=> {
                return <p key={user?.id}>{user.title + ' ' +  user.firstName + ' ' + user.lastName}</p>
            })}
        </div>
        </Container>
    )
}

export default Main;
