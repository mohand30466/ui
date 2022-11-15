import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { Api } from "../service/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faSquarePlus,
  faPenToSquare,
  faPlusSquare,
  faClockFour,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
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
  const [staffData, setStaffData] = useState([]);
  const [shiftData, setShiftData] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const busnessinfo = state;

  useEffect(() => {
    const getStaffData = Api.GetStaff().then((res) => setStaffData(res));
    const getshiftData = Api.GetShift().then((res) => setShiftData(res));
  }, []);

  console.log(staffData);

  return (
    <>
      <div>
        <div className="bussinessinformations">
          {state && (
            <>
              <div>
                <div className="avatar">
                  <FontAwesomeIcon
                    className="bussinessAvatar"
                    icon={faChartSimple}
                  />{" "}
                </div>
                <div>
                  <p className="busInfo">{state.name}</p>
                  <p className="busInfo">{state.catogery}</p>
                  <p className="busInfo">{state.bussinessId}</p>
                </div>
              </div>
              <div>
                <h3>
                  Update your bussiness{" "}
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    onClick={(e) =>
                      navigate("/updatebussiness", { state: state })
                    }
                    className="createicon"
                  />
                </h3>
                <p className="busDetail">{state.name}</p>
                <p className="busDetail">{state.phone}</p>
                <p className="busDetail">{state.email}</p>
                <p className="busDetail">{state.locations}</p>
                <p className="busDetail">{state.serviceTime}</p>
              </div>
            </>
          )}
        </div>
        {/* second container for tow things first one is to add the staffsecond is to add shifts */}
        <div className="staffAndShiftContainer">
          <div className="Staff">
            <div className="staffTitle">
              <span style={{ color: "white" }}> Add Staff </span>
              <FontAwesomeIcon
                style={{ color: "green", fontSize: "16px" }}
                className="bussinessAvatar"
                icon={faSquarePlus}
                onClick={(e) => navigate("/staff", { state: state })}
              />{" "}
            </div>
            <div className="staffllist">
              {staffData &&
                staffData.map((item) => {
                  if (item.bussines == state.id) {
                    console.log(item);
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
            <h3 style={{ color: "white" }}>Manage Your Shift</h3>
            <div className="shift">
              <div>
                {" "}
                <span style={{ color: "white", marginLeft:'10px' }}>Add Shift</span>
                <FontAwesomeIcon
                  icon={faPlusSquare}
                  onClick={(e) =>
                    navigate("/shift", {
                      state: {
                        busnessid: state.id,
                        staff: staffData,
                        busnessinfo: state,
                      },
                    })
                  }
                  className="createicon"
                />{" "}
              </div>
            </div>
            <div>
              {shiftData &&
                shiftData.map((item) => {
                  if (item.bussines == state.id) {
                    return (
                      <div className="shiftStaff">
                        <div>{item.id}</div>
                        <div>{item.shifts}</div>
                        <div>
                          <FontAwesomeIcon
                            className="hours"
                            icon={faClockFour}
                            onClick={(e) => navigate("/card", { state: item })}
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
    </>
  );
}
