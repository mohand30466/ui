import React, { useState, useEffect } from "react";
import { Api } from "../service/Api";
import { useNavigate } from "react-router";
import "./Useraccount.css";

function UserAcount(props) {
  const data = JSON.parse(localStorage.getItem("data"));
  const url = "http://127.0.0.1:8000";
  const [pass, setpassword] = useState(false);
  const [oldPassword, setoldPassword] = useState("");
  const [newPassword, setnewPassword] = useState("");
  const [repeatPassword, setrebeatPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const [proData, setProData] = useState([]);
  const [newproData, setNewProData] = useState([]);
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");

  const user = data.user_id;

  const isMatch = newPassword === repeatPassword;

  const updatePassword = async (e) => {
    e.preventDefault();
    setpassword(!pass);
    if (isMatch && newPassword.length > 2) {
      const updatepass = await Api.ChangePass(user, {
        oldPassword:oldPassword,
        newPassword:newPassword
      }).then((res) => {
        console.log(res);
        alert(setMsg(updatepass.message));
        setnewPassword("");
        setrebeatPassword("");
      }).catch(err=>console.log(err.messages))
    } else {
      setMsg("enter old and new password");
    }
  };

  useEffect(() => {
    const dat = Api.Getuser(data.user_id).then((res) => setUserData(res));
    const prodb = Api.GetProfile().then((res) => setProData(res));
  }, []);

  const filterdata = proData.filter((item) => item.user == data.user_id);

  // console.log("full user profile data", filterdata[0]);

  return (
    <div className="accountcontainer">
      {filterdata &&
        filterdata.map((item) => (
          <>
            <div className="left">
              <div className="avatarcontainer">
                <div className="avatar">
                  <img src={item.avatar} alt={item.id} />
                </div>
                <div>
                  <p>{userData.last_name}</p>
                </div>
              </div>
              <div className="adjectives">
                <div className="profisional">
                  <h4>{item.profisional}</h4>
                </div>
                <div className="bio">
                  <p>{"A little bit a bout me i am"}</p>
                </div>
                <div>
                  <button
                    className="btn1"
                    onClick={(e) => navigate("/updateaccount", { state: item })}
                  >
                    Updata account
                  </button>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="rightinfo">
                <div>
                  <p> Email : {userData.email}</p>
                </div>
                <div>
                  <p> Phone number : {item.phone}</p>
                </div>
                <div>
                  <p>Address : {item.address}</p>
                </div>

                <div>
                  <p>Open to work</p>
                </div>
                <div>
                  <p> Rates</p>
                </div>
              </div>

              <div>
                {pass ? (
                  <div>
                    <form onSubmit={updatePassword}>
                      <div>
                        <input
                          type="password"
                          placeholder="old passeord"
                          onChange={(e) => setoldPassword(e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          placeholder="new passeord"
                          onChange={(e) => setnewPassword(e.target.value)}
                        />
                      </div>
                      <div>
                        <input
                          type="password"
                          placeholder=" rebeat new passeord"
                          onChange={(e) => setrebeatPassword(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                ) : null}{" "}
                <button type="submit" onClick={updatePassword} className="btn1">
                  {pass ? "Updata password" : "Change Password"}
                </button>
                <p>{msg}</p>
              </div>
            </div>
          </>
        ))}
    </div>
  );
}

export default UserAcount;
