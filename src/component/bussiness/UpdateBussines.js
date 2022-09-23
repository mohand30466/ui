import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import { Api } from "../service/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Typography>0123456789</Typography>
      <Typography>www.directmanpower.com</Typography>
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
  container: {
    background: "#a8dadc",
    maxWidth: "96.2%",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  director: {
    minHeight: "63.5vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const UpdateBussiness = () => {
  const [name, setName] = useState("");
  const [bussinessId, setBussinessId] = useState("");
  const [email, setEmail] = useState("");
  const [catogery, setCatogery] = useState("");
  const [phone, setPhone] = useState("");
  const [locations, setLocations] = useState("");
  const [serviceTime, setServiceTime] = useState("");
  const classes = useStyles();
  const db = JSON.parse(localStorage.getItem("data"));
  const { state } = useLocation();


  const UpdatebussinessClick = async (e) => {
    e.preventDefault();
    const user = state.user;
    const id = state.id;
    const uploadData = new FormData();
    uploadData.append("user", user);
    uploadData.append("name", name);
    uploadData.append("bussinessId", bussinessId);
    uploadData.append("email", email);
    uploadData.append("phone", phone);
    uploadData.append("catogery", catogery);
    uploadData.append("locations", locations);
    uploadData.append("serviceTime", serviceTime);

    const updateBussines = await Api.UpdateBussiness(id,uploadData)
      .then((res) => {
        localStorage.setItem("bussinesData", JSON.stringify(res));
        if (res.id) {
          alert(`Congratulations!`);
        } else {
          alert("somthing went weong try again");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container className={classes.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <FontAwesomeIcon icon={faSquarePlus} />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update Bussiness
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={UpdatebussinessClick}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="Name"
                  name="Name"
                  variant="outlined"
                  required
                  fullWidth
                  id="Name"
                  label="Bussiness Name"
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="BussinessId"
                  name="BussinessId"
                  variant="outlined"
                  required
                  fullWidth
                  id="BussinessId"
                  label="BussinessId "
                  onChange={(e) => setBussinessId(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete="emal"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="Catogery"
                  label="Catogery"
                  name="Catogery"
                  autoComplete="Catogery"
                  onChange={(e) => setCatogery(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="phone"
                  label="phone"
                  type="text"
                  id="phone"
                  autoComplete="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="locations"
                  label="locations"
                  type="text"
                  id="locations"
                  autoComplete="locations"
                  onChange={(e) => setLocations(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="serviceTime"
                  label="serviceTime"
                  type="datetime"
                  id="serviceTime"
                  autoComplete="locations"
                  onChange={(e) => setServiceTime(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="By clicking create you a gree term and policy."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              // className={classes.submit}
            >
              Update Your bussiness
            </Button>
          </form>
        </div>
      </Container>

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default UpdateBussiness;
