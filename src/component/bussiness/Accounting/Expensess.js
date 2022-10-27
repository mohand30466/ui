import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import './expensess.css'

export default function Expensess() {
  const navigate = useNavigate();
  const date = new Date();
  return (
    <>
      <div className="paysleevetype">
        <div className="back-icon">
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={(e) => navigate("/accounting")}
          />
        </div>
        <div>
          Date: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}{" "}
        </div>
      </div>
      <div>
        <div style={{ textAlign: "center", fontSize: "2rem" }}>Expencess</div>
        <div className="excontainer">
          <div className="ex "> 

          <div>
            <div>Salary</div>
            <div>5555</div>
          </div>
          <div>
            <div>Other Expensess</div>
            <div>55550</div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
