import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState, useEffect } from "react";
import { Api } from "../service/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faSquarePlus,
  faPenToSquare,
  faPlusSquare,
  faClock,
  faClockFour,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./bussinessDetail.css";

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

export default function BussinessDetail() {
  const [data, setData] = useState([]);
  const [bussnessData, setBussnessData] = useState([]);
  const [myBussnessId, setMyBussiness] = useState();
  const [shiftData, setShiftData] = useState([]);
  const db = JSON.parse(localStorage.getItem("data"));
  const id = db.user_id;
  
  const navigate = useNavigate();

  useEffect(() => {
    const getData = Api.GetBussiness().then((res) => {
      setData(res);
      setMyBussiness(res.id);
    });
    const getbussinesData = Api.GetStaff().then((res) => setBussnessData(res));
    const getshiftData = Api.GetShift().then((res) => setShiftData(res));
  }, []);
  return (
    <Container>
      {/* first container for bussiness detail */}
      <div>
        <div className="bussinessinformations">
          {data &&
            data.map((item) => {
              if (item.user == id && item.bussinessId == 505151) {
                return (
                  <>
                    <div>
                      <div className="avatar">
                        <FontAwesomeIcon
                          className="bussinessAvatar"
                          icon={faChartSimple}
                        />{" "}
                      </div>
                      <div>
                        <p className="busInfo">{item.name}</p>
                        <p className="busInfo">{item.catogery}</p>
                        <p className="busInfo">{item.bussinessId}</p>
                      </div>
                    </div>
                    <div>
                      <h3>
                        Update your bussiness{" "}
                        <FontAwesomeIcon
                          icon={faPenToSquare}
                          onClick={(e) => console.log(e)}
                          className="createicon"
                        />
                      </h3>
                      <p className="busDetail">{item.name}</p>
                      <p className="busDetail">{item.phone}</p>
                      <p className="busDetail">{item.email}</p>
                      <p className="busDetail">{item.locations}</p>
                      <p className="busDetail">{item.serviceTime}</p>
                    </div>
                  </>
                );
              }
            })}
        </div>
        {/* second container for tow things first one is to add the staffsecond is to add shifts */}
        <div className="staffAndShiftContainer">
          <div className="Staff">
            <div className="staffTitle">
              <span>Add Staff </span>
              <FontAwesomeIcon
                className="bussinessAvatar"
                icon={faSquarePlus}
                onClick={(e) => navigate("/staff")}
              />{" "}
            </div>
            <div className="staffllist">
              {bussnessData &&
                bussnessData.map((item) => {
                  if (item.bussines == 1 || myBussnessId) {
                    return (
                      <>
                        <div className="staffCard">
                          <p className="busInfo">{item.name}</p>
                          <p className="busInfo">{item.job}</p>
                        </div>
                      </>
                    );
                  }
                })}
            </div>
          </div>
          <div className="shiftContainer">
            <h3>Manage Your Shift</h3>
            <div className="shift">
              <div>
                {" "}
                <FontAwesomeIcon
                  icon={faPlusSquare}
                  onClick={(e) => navigate("/shift")}
                  className="createicon"
                />{" "}
                Add Shift
              </div>
            </div>
            <div>
              {shiftData &&
                shiftData.map((item) => {
                  if (item.bussines == 1 || myBussnessId) {
                    return (
                      <div className="shiftStaff">
                        <div>{item.id}</div>
                        <div>{item.shifts}</div>
                        <div>
                          <FontAwesomeIcon
                            className="hours"
                            icon={faClockFour}
                            onClick={(e) => navigate("/card",{ state: item })}
                          />{" "}
                          Update hours card
                        </div>
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
