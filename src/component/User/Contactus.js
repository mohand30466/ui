import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState, useEffect } from "react";
import { Api } from "../service/Api";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import { Link } from "react-router-dom";
import "./contactus.css"

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Typography>
        0123456789
      </Typography>
      <Typography>
        www.directmanpower.com
      </Typography>
      <Link color="inherit" to="/">
        www.yashirmanpower.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  container:{
    background:"#a8dadc",
    maxWidth:"96.2%"

  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const ContactUs = () => {
  const [title, setTitle] = useState("");
  const [emailAddress, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const classes = useStyles();

  const RegesterClick = async (e) => {
    e.preventDefault();
    const sendMessage = await Api.Contact_Us({ emailAddress,title, subject }).then((res) => {
        console.log(res);
        if (res.id) {
          alert(`Thank you! We will get back to you ass soon as posiple`);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="content" component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <ContactPhoneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            ContactUs
          </Typography>
          <form className={classes.form} noValidate onSubmit={RegesterClick}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  autoComplete="title"
                  name="title"
                  variant="outlined"
                  required
                  fullWidth
                  type="text"
                  id="title"
                  label="title"
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="email"
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  multiline
                  name="text"
                  rows={6}
                  label="subject"
                  type="text"
                  id="text"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="By Click it You agree To Recived Message via email."
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Send Message
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </div>
    </>
  );
};

export default ContactUs;
