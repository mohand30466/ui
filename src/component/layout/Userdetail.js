import { ContentCutOutlined } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Api } from "../service/Api";
import "./userdetail.css";

const Userdetail = () => {
  const [active, setactive] = useState(true);
  const [userinfo, setUserinfo] = useState([]);

  const { state } = useLocation();

  const obj = {};
  obj.profile_id = state.id;
  obj.address = state.address;
  obj.phone = state.phone;
  obj.job = state.profisional;
  obj.avatar = state.avatar;
  obj.user = state.user;
  obj.userinfo = userinfo;
  const navigate = useNavigate();

  useEffect(() => {
    const user = Api.Getuser(obj.user).then((res) => setUserinfo(res.id));
  }, []);

  return (
    <div className="userdetaincontainer">
      <p>
        Here is: <strong>{obj.name} </strong> information wishing you good luck{" "}
      </p>
      <div>
        {obj && (
          <div key={obj.length} className="userdetailinformations">
            <div className="avatarcontainer1">
              <img className="useravatar" src={obj.avatar} alt={obj.name} />
            </div>
            <div className="userdetailinfo">
              <div className="userInfoRow1">
                <p className="username">{obj.userinfo.first_name}</p>
                <p className="userjob">{obj.job}</p>
              </div>

              <div className="userInfoRow1">
                <p className="userphone">{obj.phone}</p>
                <p className="useremail">{obj.email}</p>
              </div>
              <div className="userInfoRow1">
                <p className="useraddress">{obj.address}</p>
                <button
                  className="buttom1"
                  onClick={(e) => navigate("/messages", { state: obj })}
                >
                  {" "}
                  <Link to="/messages">Send message </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Userdetail;
