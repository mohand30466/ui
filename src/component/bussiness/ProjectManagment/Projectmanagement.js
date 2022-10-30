import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import "./Projectmanagement.css";

export default function Projectmanagement() {
  const navigate = useNavigate();
  const [actions, setActions] = useState(false);
  console.log(actions);

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
          onClick={(e) => setActions(!actions)}
        >
          {!actions ? (
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
        {actions ? (
          <div className="actionCreator">
            <input type={"text"} placeholder="record your actions" />
            <input type={"datetime-local"} />
            <button>Create actions</button>
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
            />
            <button style={{ width: "10vw", background: "green" }} onClick={(e) => setActions(!actions)}>
              update
            </button>
            <button style={{ width: "10vw" }}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
}
