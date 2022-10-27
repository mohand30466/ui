import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

import "./Income.css";

export default function Income() {
  const navigate = useNavigate();
  const date = new Date();

  return (
    <div>
      <div className="back-icon">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={(e) => navigate("/accounting")}
        />
      </div>
      <div style={{ textAlign: "center", fontSize: "2rem" }}>Greate Invoicess!</div>
      <div className="invoicesscontainer">
        <div className="invoicsType">
          <div className="invoiceTypeBtn">
            <button>invoice</button>
            <button> tax invoice</button>
          </div>
          <div>
            Date: {date.getDate()}/{date.getMonth()}/{date.getFullYear()}{" "}
          </div>
        </div>
        <div className="bussiness-information">
          <input
            className="bsnsinput"
            type=" text"
            placeholder="Bussiness Name"
          />
          <input className="bsnsinput" type="text" placeholder="Bussiness ID" />
          <input className="bsnsinput" type="email" placeholder="Email" />
        </div>
        <div className="invoiceinfo">
          <input
            className="bsnsinput"
            type=" text"
            placeholder="about invoice"
          />
          <input className="bsnsinput" type="text" placeholder="Money Amount" />
          <input className="bsnsinput" type="checkbox" placeholder="Tax" />
        </div>
        <div className="submitinvoice">
          <p >payment time</p>

          <input className="bsnsinput" type="date" placeholder="payment Time" />
          <button onClick={e=>navigate('/invoicess')}>Greate Invoice</button>
        </div>
      </div>
    </div>
  );
}
