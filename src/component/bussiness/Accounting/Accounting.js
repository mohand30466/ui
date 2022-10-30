import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import "./Accounting.css";

export default function Accounting() {
  const navigate = useNavigate();
  return (
    <div className="account-cont">
      <div className="back-icon">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={(e) => navigate("/home")}
        />
      </div>
      <div>
        <div style={{ textAlign: "center", fontSize: "2rem" , background:"#1d3557" , color:"#f1faee"}}>
          Accounting Manage your Work
        </div>
        <div style={{ textAlign: "center", fontSize: "2rem",background:"#1d3557",color:"#f1faee" }}>
          here you can make accounting for all the worker you have
        </div>
        <div className="content-links">
          <div className="nav" onClick={(e) => navigate("/income")}>
            <div style={{fontSize:"1.5rem"}}>Income</div>
            <p>here you can do all the invoicess and anything related to the incomes</p>
          </div>
          <div className="nav" onClick={(e) => navigate("/paysleeve")}>
            {" "}
            <div  style={{fontSize:"1.5rem"}}>Paysleeve</div>
            <p>here the place for creating the paysleeve for your worker</p>

          </div>
          <div className="nav" onClick={(e) => navigate("/expensess")}>
            {" "}
            <div style={{fontSize:"1.5rem"}}>Expensess</div>
            <p>here you can know all your expensess incloud salaries and rent and others</p>

          </div>
        </div>
      </div>
    </div>
  );
}
