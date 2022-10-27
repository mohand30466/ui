import React from "react";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import "./Invoicess.css";

export default function Invoicess() {
  const exportmethod = React.useRef(null);
  const exportToPdf = (e) => {
    exportmethod.current.save();
  };
  return (
    <div className="invoiceContainer">
      <PDFExport ref={exportmethod} paperSize="A4" className="pdf"> 
      <div className="businformations" style={{ textAlign: "center" }}>
        {/* /////////////////////bussiness detail////////////// */}
        <div className="bslogo"></div>
        <div className="bsdetail">
          <div>Name: Bussiness name</div>
          <div style={{fontSize:'12px'}}>ID: 00000000</div>
          <div style={{fontSize:'12px'}}>Email: Bussiness@gmail.com</div>
          <div style={{fontSize:'12px'}}>Address:Somkon 22 Tel Aviv</div>
          <div style={{fontSize:'12px'}}>Phone:00000000</div>
        </div>
      </div>
      {/* ////////////////client informations//////////////// */}
      <div className="clientinforations">
        <div>
          <div>For: Yashir manpower Ltd</div>
          <div>ID:000000</div>
        </div>
        <div>
          <div>Original</div>
          <div>Date:22/22/22</div>
          <div>signed with digitali</div>
        </div>
      </div>
      {/* //////////////////////////invoice informations////////// */}

      <div>
        <div style={{ fontSize: "1.2rem", textAlign:"center"}}>Tax invoice, 0000000</div>
      </div>
      {/* ////////////////////////detail//////////////////////////// */}
      <div className="invdetail">
        <div style={{ textalign: "center" }}>Detail</div>
        <div className="invdetails">
          <table style={{ width: "100%" }}>
            <tr style={{ background:"lightblue", border:"1px solid black" }}>
              <th>detail</th>
              <th>quantty</th>
              <th>cost</th>
              <th>amount</th>
            </tr>
            <tr>
              <td>
                <tr> invoice for...</tr>
              </td>
              <td>
                <tr>3</tr>
              </td>
              <td>
                <tr>3333</tr>
              </td>
              <td>
                <tr>33333</tr>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div className="finalAmount">
        <div>tax: 222</div>
        <div>final amount: 666666</div>
      </div>
      <div className="bankdetail">
        <div>To pay till :33/33/22</div>
        <div> Bank 12 hapoalim, pranch 607, account 3838383</div>
        <div>Name: yaoez Hagira</div>
      </div>
      <div className="finalAmount" >
      </div>
      </PDFExport>
        <button className="psbtn" onClick={(e) => exportToPdf(e)}>
          Download Pdf
        </button>
    </div>
  );
}
