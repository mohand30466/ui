import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./Agreements.css";
import { useState } from "react";
import AgreementLatter from "./AgreementLatter";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Typography>0123456789</Typography>
      <Typography>directmanpower@gmail.com</Typography>
      <Link color="inherit" to="/">
        www.yashirmanpower.com
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#a8dadc",
    maxWidth: "96.2%",
    height: "100%",
  },
}));

const Agreements = () => {
  const [agreemantTitle, setAgreementTitle] = useState("Cheif");
  const [price, setPrice] = useState("10");
  const [mystyle, setMyStyle] = useState("");

  

  const hamdleclick = (title, price, style) => {
    setAgreementTitle(title);
    setPrice(price);
    setMyStyle(style);
    
  };
  return (
    <div className="content">
      <div className="topaboutus">
        <div className="topcontent">
          <p className="title" style={{textAlign:"center"}}> Agreements</p>
          <div className="h1">We make the agreements easier and clear for you</div>
          <p className="h1">We Are Here For You!</p>
          <p className="h1"> Please Read It Carfuly And Be Sure To Understand Everything</p>
        </div>
        <div className="catogories agreementscatogeries">
          <div
            className="partner proffisional"
            style={{ color: agreemantTitle == "Cheif" ? mystyle : null }}
            onClick={(e) => hamdleclick("Cheif", 90, "red")}
          >
            Cheif
          </div>
          <div
            className="partner proffisional"
            style={{ color: agreemantTitle == "Cooker" ? mystyle : null }}
            onClick={(e) => hamdleclick("Cooker", 90, "red")}
          >
            Cooker
          </div>
          <div
            className="partner proffisional"
            style={{ color: agreemantTitle == "Mensar" ? mystyle : null }}
            onClick={(e) => hamdleclick("Mensar", 80, "red")}
          >
            Mensar
          </div>
          <div
            className="partner proffisional"
            style={{ color: agreemantTitle == "Stewar" ? mystyle : null }}
            onClick={(e) => hamdleclick("Stewar", 70, "red")}
          >
            Stewar
          </div>
          <div
            className="partner proffisional"
            style={{ color: agreemantTitle == "Cleaner" ? mystyle : null }}
            onClick={(e) => hamdleclick("Cleaner", 70, "red")}
          >
            Cleaner
          </div>
          <div
            className="partner proffisional"
            style={{ color: agreemantTitle == "Prepration" ? mystyle : null }}
            onClick={(e) => hamdleclick("Prepration", 80, "red")}
          >
            Prepration
          </div>
        </div>
      </div>

      <div className="middlepage">
        <div>
          {agreemantTitle} Agreements {price}
        </div>
        <AgreementLatter price={price}/>
       
      <div/>
      <Box mt={0}>
        <Copyright />
      </Box>
    </div>
    </div>
  );
};

export default Agreements;
