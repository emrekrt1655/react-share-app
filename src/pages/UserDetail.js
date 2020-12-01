import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {fetchData} from '../helper/FetchData'
import {makeStyles} from '@material-ui/core/styles';
import { capitalize, Grid, Container} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';



const stylesFunc = makeStyles((theme)=>({
    wrapper:{
        marginTop: '5rem',
        height: 'calc(100vh - 10-0625rem)',
        textAlign:'center'
    },
    avatar:{
    margin: '2rem auto',
    backgroundColor: theme.palette.secondary.main
   }
}))

function UserDetail() {
    const {id} = useParams();
    console.log(id)
    const mainStyles = stylesFunc();

    const [userDetail, setUserDetail] = useState();
    useEffect(()=>{
        fetchData(`/user/${id}`)
        .then((res)=>console.log(res))
        .catch()
        .finally();
        
    }, [id]);
  
    return(
        <Container  className={mainStyles.wrapper}>
            {JSON.stringify(userDetail)}
            <img src={userDetail.picture} alt='user'/>
            <Typography variant='h4' >{userDetail.firstName}</Typography>
            <Typography variant='h4' >{userDetail.lastName}</Typography>
            <Typography variant='h4' >{userDetail.registerDate}</Typography>
            <Typography variant='h4' >{userDetail.phone}</Typography>
        </Container>
    )

}

export default UserDetail;