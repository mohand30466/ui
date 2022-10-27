import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { PDFExport,savePDF } from "@progress/kendo-react-pdf";
import { useState } from "react";
import "./paysleeve.css";

export default function Paysleeve() {
  const [fee, setFee] = useState("");
  const navigate = useNavigate();
  const date = new Date();
  const exportmethod = React.useRef(null)
  const exportToPdf = (e)=>{
    exportmethod.current.save()
  }
 

  return (
    <div>
      <PDFExport ref={exportmethod} paperSize="A4" className="pdf"> 
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
      <div className="paysleevecpntainer">
        <div className="paysleeveTitle">
          <div className="pstitle">Create Paysleeve</div>

          <div className="paysleevecreator">
            <div>Name:</div>
            <div>hours 100%:</div>
            <div>hours 125%:</div>
            <div>hours 150%:</div>
            <input
              className="hoursfee"
              type={"text"}
              placeholder="hours fee"
              onChange={(e) => setFee(e.target.value)}
            />
            <button className="psbtn">
              {" "}
              <FontAwesomeIcon
                icon={faSquarePlus}
                onClick={(e) => alert(` ${fee}, "yous paysleeve created"`)}
              />
            </button>
          </div>
        </div>
      </div>
      <div >
        <div className="pslisttitle">Paysleeve list</div>
        <div  className="pslist">
          <div className="visicalps">
            <div>Name:</div>
            <div>ID:</div>
            <button className="psbtn" onClick={e=>exportToPdf(e)}>DonloadPdf</button>
          </div>
        </div>
      </div>
      </PDFExport>
     
    </div>
  );
}
