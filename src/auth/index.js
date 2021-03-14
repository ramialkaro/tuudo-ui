import React, {useState} from "react";
import {
  Container,
  Grid,
  Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Login from "./Login";

const useStyles = makeStyles((theme) => ({
  root: {
    margin:0,
    padding:0,
    backgroundColor:theme.palette.secondary.main,
    height:'100vh',
  },
  login:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  img:{
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
}));

 const Auth = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={6} md={4} className={classes.login}>
        <Login />
      </Grid>
      <Grid item xs={false} sm={6} md={8} className={classes.img} />
    </Grid>
  );
};
export default Auth