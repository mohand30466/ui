import React, { useState, useEffect } from "react";
import { Api } from "../service/Api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const Users = () => {
  const [data, setData] = useState([]);
  const [prfiledata, setProfiledata] = useState([]);
  const navigate = useNavigate();

  const style = {
    usercontainer: {
      width: "30vw",
      minheight: "100vh",
      display: "flex",
      justifyItem: "spaceBetween",
      border: "1px solid blue",
      borderRadius: "5px",
      margin: "10px",
      background: "#f1faee",
      marginTop: "1rem",
    },
    usercontainer0: {
      marginTop: "4.2rem",
    },
    tittle: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      marginTop: "1rem",
    },
    avatar: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      border: "1px solid blue",
      margin: "5px",
    },
    info: {
      width: "50%",
      marginLeft: "10px",
    },
    title: {
      margin: "4px",
      lineheight: "10px",
    },
    nav: {
      textDecoration: "none",
    },
  };

  useEffect(() => {
    const userdata = Api.Getusers()
      .then((res) => {
       localStorage.setItem("udata", JSON.stringify(res))
      }

      )
      .catch((err) => console.log(err.message));

    const profiles = Api.GetProfile()
      .then((res) => setProfiledata(res))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      <p style={style.tittle}> Users List </p>

      <div style={style.usercontainer0}>
        {prfiledata &&
          prfiledata.map((item) => {
            return (
              <>
                <div
                  style={style.usercontainer}
                  onClick={(e) => navigate("/userdetail", { state: item })}
                  key={item.id}
                >
                  <div>
                    <img
                      style={style.avatar}
                      src={item.avatar && item.avatar}
                      alt={item.id}
                    />
                  </div>
                  <div style={style.info}>
                    <p style={style.title}>{item.profisional}</p>
                    <p>{item.address && item.address}</p>
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Users;
