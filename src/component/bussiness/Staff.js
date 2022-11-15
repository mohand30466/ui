import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState, useEffect } from "react";
import { Api } from "../service/Api";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBackward} from "@fortawesome/free-solid-svg-icons";
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
    maxWidth: "100%",
    height:"100vh",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Staff = () => {
  const classes = useStyles();
  const Bdata = JSON.parse(localStorage.getItem("bussinesData"));
  const Udata = JSON.parse(localStorage.getItem("data"));
  const user = Udata.user_id;
  const [name, setName] = useState("");
  const bussiness = Bdata.id;
  const [job, setJob] = useState("");
  const [staffId, SetStaffId] = useState("");
  const navigate = useNavigate()
  const {state}= useLocation()
 
  const GStaffClick = async (e) => {
    e.preventDefault();
    const sendMessage = await Api.GStaff({ bussiness, name, staffId, job })
      .then((res) => {
        if (res.id) {
          alert(`Congratulations! you add new Staff`);
        } else {
          alert(" wops somthing went weong try again");
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const GetStaffData = Api.GetStaff()
      .then((res) => {
        localStorage.setItem("Allstaff",JSON.stringify(res));
        console.log(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={classes.container}>
      <FontAwesomeIcon icon={faBackward} onClick={e=>navigate("/bussinessdetail",{state:state})}/>

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add Staff
          </Typography>
          <form className={classes.form} noValidate onSubmit={GStaffClick}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="Name"
                  name="Name"
                  variant="outlined"
                  required
                  fullWidth
                  id="Name"
                  label="Name"
                  onChange={(e) => setName(e.target.value)}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="staffId"
                  name="staffId"
                  variant="outlined"
                  required
                  fullWidth
                  id="staffId"
                  label="staffId"
                  onChange={(e) => SetStaffId(e.target.value)}
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="proffisional"
                  name="proffisional"
                  variant="outlined"
                  required
                  fullWidth
                  id="proffisional"
                  label="proffisional"
                  onChange={(e) => setJob(e.target.value)}
                  autoFocus
                />
              </Grid>

            </Grid>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Add Staff
            </Button>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default Staff;
