import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState, useEffect } from "react";
import { Api } from "../service/Api";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
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
    minHeight: "100vh",
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
  const [day, setDay] = useState("");
  const [startAt, setStartAt] = useState();
  const [finishAt, setFinishAt] = useState();
  const [staffData, setStaffData] = useState("");
  const [staffCard, setStaffCard] = useState([]);
  const [update, setUpdate] = useState(false);
  const classes = useStyles();
  const { state } = useLocation();
  const staff = state.staff;
  const shifts = state.shifts;
  const navigate = useNavigate();

  useEffect(() => {
    const staffData = Api.GetSingleStaff(state.id).then((res) =>
      setStaffData(res)
    );
    const staffCard = Api.GetStaffCard().then((res) => setStaffCard(res));
  }, [update]);

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
        if (res.id) {
          setUpdate(!update);
          alert(`Thank you! you update your card`);
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(staffData);

  return (
    <Container className={classes.container}>
      <FontAwesomeIcon
        icon={faBackward}
        onClick={(e) => navigate("/bussiness")}
      />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Add Shift
          </Typography>
          <Typography component="h1" variant="h5">
            Choose Staff
          </Typography>

          {staffData && (
            <div>
              <p className="stafflist"> {staffData.name}</p>
              <p className="stafflist"> {staffData.staffId}</p>
            </div>
          )}

          <form className={classes.form} noValidate onSubmit={CardClick}>
            <Grid container spacing={2}>
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
                  onChange={(e) => setStartAt(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <input
                  className="inputt"
                  type="time"
                  onChange={(e) => setFinishAt(e.target.value)}
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
      </Container>
      <div className="cardDetail">
        <h1>Card Detail</h1>
        <div>
          {staffCard &&
            staffCard.map((item) => {
              if (item.staff === staff) {
                return (
                  <div className="visicalCard">
                    <span>{item.day}</span>
                    <span>{item.startAt}</span>
                    <span>{item.finishAt}</span>
                  </div>
                );
              }
            })}
        </div>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default Cards;
