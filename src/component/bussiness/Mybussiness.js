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
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
    maxWidth: "100%",
  },
  avatar: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  container: {
    background: "#a8dadc",
    maxWidth: "100%",
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
    Width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Mybussiness = () => {
  const [bussinessData, setBussinessData] = useState([]);
  const [name, setName] = useState("");
  const [bussinessId, setBussinessId] = useState("");
  const [email, setEmail] = useState("");
  const [catogery, setCatogery] = useState("");
  const [phone, setPhone] = useState("");
  const [locations, setLocations] = useState("");
  const [serviceTime, setServiceTime] = useState("");
  const [active, setActive] = useState(false);
  const classes = useStyles();
  const db = JSON.parse(localStorage.getItem("data"));
  const user = db.user_id;
  const navigate = useNavigate();

  useEffect(() => {
    const getData = Api.GetBussiness().then((res) => {
      setBussinessData(res);
    });
  }, []);

  const mydata = bussinessData.map((dta) =>{
    const user = db.user_id;
    if (dta.user == user) navigate("/bussinessdetail",{ state: dta });
  }
   );
    

  console.log(user);
  const RegesterClick = async (e) => {
    e.preventDefault();
    const sendMessage = await Api.Gbussiness({
      user,
      name,
      bussinessId,
      email,
      catogery,
      phone,
      locations,
      serviceTime,
    })
      .then((res) => {
        localStorage.setItem("bussinesData", JSON.stringify(res));
        if (res.id) {
          alert(`Congratulations!`);
          navigate("/bussinessdetail");
        } else {
          alert("somthing went weong try again");
        }
      })
      .catch((err) => console.log(err));
  };

  
  return (
    <Container className={classes.container}>
      <div>
        <span>
          {" "}
          {active ? (
            <span>Update your Bussiness </span>
          ) : (
            <span>Create Bussiness </span>
          )}{" "}
        </span>
        <FontAwesomeIcon
          icon={faSquarePlus}
          onClick={(e) => setActive(!active)}
          className="createicon"
        />
      </div>
      {active ? (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create Bussiness
            </Typography>
            <form className={classes.form} noValidate onSubmit={RegesterClick}>
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
                Greate Bussiness
              </Button>
            </form>
          </div>
        </Container>
      ) : (
        <div className={classes.director}>
          <h3>ALL IN ONE</h3>
          <h3>Bussiness management</h3>
          <ol>
            <li>Create your bussiness</li>
            <li>Create Shifts</li>
            <li>Create Staff</li>
            <li>Update Staff on the Shifts </li>
            <li>Add daily hours report</li>
            <li>Add Daily employee report</li>
            <li>Accounting</li>
            <li>Make paysleeve for the employee</li>
            <li>My wallet</li>
            <li>Analize Data</li>
            <li>Project management</li>
            <li>Mission management</li>
          </ol>
        </div>
      )}

      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Mybussiness;
