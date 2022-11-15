import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import { Api } from "../service/Api";
import { Link, Navigate } from "react-router-dom";
import "./Shift.css";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

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
    maxWidth: "100vw",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Shift = () => {
  const Bdata = JSON.parse(localStorage.getItem("bussinesData"));

  const [staff, SetStaffId] = useState("");
  const [shifts, setShifts] = useState("");
  const classes = useStyles();
  const {state} = useLocation();
  const data = state.staff
  const businessdata = state.busnessinfo
  const bussines = state.busnessinfo.id
  console.log(bussines);
  const navigate = useNavigate()
 



  const GShiftClick = async (e) => {
    e.preventDefault();
    const sendMessage = await Api.GShift({ bussines, staff, shifts })
      .then((res) => {
        console.log(res);
        if (res.id) {
          alert(`Thank you! We will get back to you ass soon as posiple`);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container className={classes.container}>
      <FontAwesomeIcon icon={faBackward} onClick={e=>navigate("/bussinessdetail",{state:businessdata})}/>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Shift
          </Typography>
          <Typography component="h1" variant="h5">
            Choose Staff
          </Typography>

          {data &&
            data.map((item) => {
              if(item.bussines== state.busnessid){
              return (
                <div className="stafflist" onClick={(e) => SetStaffId(item.id)}>
                  {item.name},,,{item.job}
                </div>
              )};
            })}

          <form className={classes.form} noValidate onSubmit={GShiftClick}>
            <Grid container spacing={2}>
              <div className="checkboxcontainer">
                <Grid item xs={3}>
                  Morning
                  <TextField
                    autoComplete="Name"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    type="checkbox"
                    label=""
                    onClick={(e) => setShifts("MOR")}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={3}>
                  Evening
                  <TextField
                    autoComplete="Name"
                    name="Name"
                    variant="outlined"
                    required
                    fullWidth
                    id="Name"
                    type="checkbox"
                    label=""
                    onClick={(e) => setShifts("EVE")}
                    autoFocus
                  />
                </Grid>
              </div>
            </Grid>

            <Button type="submit" fullWidth variant="contained" color="primary">
              Add Managers
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Container>
  );
};

export default Shift;
