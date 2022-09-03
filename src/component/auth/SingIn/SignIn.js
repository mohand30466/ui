import React, { useState } from "react";
import { Api } from "../../service/Api";
import { useAuth } from "../../useContex/Contex";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from "@material-ui/core";



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link to = "/" color="inherit" href="https://mui.com/">
        www.yashirmanpower.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    marginTop: theme.spacing(10),
    backgroundColor: theme.palette.secondary.main,
  },
  container:{
    background:"#a8dadc",
    maxWidth:"96.2%"
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {  setUserdata } = useAuth();  
  const navigate = useNavigate();
  const classes = useStyles();

  const Signinclick = async (e) => {
    e.preventDefault();
    const authData = await Api.Login({ username, password }).then((res) => {
      console.log(res)
      setUserdata(res.user && res.user.profile.id);
      localStorage.setItem("data", JSON.stringify(res));
      if (res.token) navigate("/home", { data: res });
      else {
      }
    });
  };
  return (
    
    <Container className={classes.container}> 
    <Container component="main" maxWidth="xs" >
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={Signinclick} noValidate>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="email"
          name="email"
          autoComplete="email"
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Sign In
        </Button>

        <Grid container>
          <Grid item xs>
            <Link to={"/"} variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link to={"/signup"} variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
    <Box mt={5}>
        <Copyright />
      </Box>
    {/* <Box mt={8}>
      <Copyright />
    </Box> */}
  </Container>
  </Container>
   
  )
};

export default SignIn;
