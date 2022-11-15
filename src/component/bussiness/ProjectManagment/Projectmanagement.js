import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import "./Projectmanagement.css";
import { Api } from "../../service/Api";

export default function Projectmanagement() {
  const db = JSON.parse(localStorage.getItem("data"));
  const user = db.user_id;
  const navigate = useNavigate();
  const [action, setActions] = useState(false);

  const [actions, setAction] = useState("");
  const [time, setTimes] = useState("");
  const [isfinish, setIsFinish] = useState(false);
  const [data, setData] = useState([]);
  console.log(actions);

  const creatAction = () => {
    const newdata = Api.ProjectManager({ user, actions, time, isfinish })
      .then((res)=> res.JSON())
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    return () => {
      const dta = Api.GetProjectManager()
        .then((res) => setData(res))
        .catch((err) => console.log(err));
      console.log(data);
    };
  }, [data]);
  return (
    <div className="cont">
      <div className="arrow_icon">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={(e) => navigate("/home")}
        />
        <div style={{ fontSize: "2rem", textAlign: "center" }}>
          {" "}
          Daily management
        </div>
      </div>
      <div className="arrow_icon">
        {" "}
        <button
          style={{ background: "green", color: "white", textAlign: "center" }}
          onClick={(e) => setActions(!action)}
        >
          {!action ? (
            <>
              Create Action
              <FontAwesomeIcon
                style={{ fontSize: "1.2rem", marginLeft: "3px" }}
                icon={faSquarePlus}
              />
            </>
          ) : (
            "Action List"
          )}
        </button>
      </div>
      <div className="programcontainer">
        {action ? (
          <div className="actionCreator">
            <input
              type={"text"}
              placeholder="record your actions"
              onChange={(e) => setAction(e.target.value)}
            />
            <input type={"time"} onChange={(e) => setTimes(e.target.value)} />
            <button onClick={(e) => creatAction(e)}>Create actions</button>
          </div>
        ) : (
          <div className="actionList">
            <div style={{ width: "50vw" }}>
              Actions here you can see all about it
            </div>
            <div>time</div>
            <input
              type={"checkbox"}
              style={{ width: "4vw", background: "green" }}
              onChange={(e) => setIsFinish(!isfinish)}
            />
            <button
              style={{ width: "10vw", background: "green" }}
              onClick={(e) => setActions(!action)}
            >
              update
            </button>
            <button style={{ width: "10vw" }}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}
