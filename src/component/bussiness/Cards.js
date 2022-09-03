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
import { useState, useEffect } from "react";
import { Api } from "../service/Api";
import { Link } from "react-router-dom";
import "./Card.css";

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
}));

const Cards = () => {
  const Bdata = JSON.parse(localStorage.getItem("bussinesData"));
  const bussiness = Bdata.id;
  const [staff, SetStaffId] = useState("");
  const [shifts, setShifts] = useState("");
  const [day, setDay] = useState("");
  const [startAt, setStartAt] = useState();
  const [finishAt, setFinishAt] = useState();
  const [staffData, setStaffData] = useState("");
  const classes = useStyles();

  useEffect(() => {
    const staffData = Api.GetStaff().then((res) => setStaffData(res));
  }, []);

  const CardClick = async (e) => {
    e.preventDefault();
    console.log(startAt);
    const sendMessage = await Api.StaffCard({
      staff,
      shifts,
      day,
      startAt,
      finishAt,
    })
      .then((res) => {
        console.log(res);
        if (res.id) {
          alert(`Thank you! We will get back to you ass soon as posiple`);
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(staffData);
  console.log(staff);
  console.log(shifts);
  return (
    <Container className={classes.container}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Shift
          </Typography>
          <Typography component="h1" variant="h5">
            Choose Staff
          </Typography>

          {staffData &&
            staffData.map((item) => {
              return (
                <div className="stafflist" onClick={(e) => SetStaffId(item.id)}>
                  {(item.bussines = bussiness ? item.name : null)}
                </div>
              );
            })}

          <form className={classes.form} noValidate onSubmit={CardClick}>
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
              <Grid item xs={12}>
                <input
                  className="inputt"
                  type="date"
                  onChange={(e) => setDay(e.target.value)}
                  placeholder="date"
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  className="inputt"
                  type="time"
                  onClick={(e) => setStartAt(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  className="inputt"
                  type="time"
                  onClick={(e) => setFinishAt(e.target.value)}
                  autoFocus

                />
              </Grid>
            </Grid>
            <div className="inputt"></div>

            <Button type="submit" fullWidth variant="contained" color="primary">
              Add hours report
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

export default Cards;
