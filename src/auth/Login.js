import React, {useState} from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import apiFetch from '../config/apiFetch'
import {Redirect} from 'react-router-dom'
import { useCookies } from 'react-cookie';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    maxHeight: 345,
  },
}));

 const Login = () => {
  const classes = useStyles();
  const [cookies, setCookie] = useCookies(['token']);
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const handleData =()=>{
      apiFetch.post("/api/authenticate",{
        username,
        password,
        rememberMe
      }).then(res => {
        if(res.status===200){
         setCookie('token',`Bearer ${res.data.id_token}`)
          setLoggedIn(true)
        }
      }).catch(err=>{
        setLoggedIn(false)
      })
  }

  if(isLoggedIn){
    return <Redirect to="/dashboard"/>
  }

  return (
    <Card className={classes.root}>
      <CardHeader title="Login to System" />
      <CardContent>
          <TextField
            margin="normal"
            variant="outlined"
            required
            label="login"
            fullWidth
            name="username"
            onChange={e => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            type="password"
            required
            variant="outlined"
            fullWidth
            label="password"
            name="password"
            onChange={e => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value={rememberMe} 
            onChange={e => setRememberMe(!rememberMe)}
             color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            variant="contained"
            onClick={handleData}
            fullWidth
            color="secondary"
          >
            Login
          </Button>
      </CardContent>
    </Card>
  );
};
export default Login