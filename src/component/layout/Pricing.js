import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./aboutus.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./pricing.css";
import { useNavigate } from "react-router-dom";

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

const Pricing = () => {
  const navigate = useNavigate();
  return (
    <div className="content1">
      <div className="pricing-topcontainer">
        <div className="topcontent">
          <p className="title-price">Services And Pricing</p>
          <div className="pricing-title">
            here you can find all kitchen servicess and pricing
          </div>
          <div className="pricing-title">
            The best price and proffisional and fastest servicess
          </div>
          <p className="pricing-prograph">
            {" "}
            We are morethan happy to have you in our client list!
            <br />
            you in good hand enjoy mining
          </p>
        </div>

        <div className="catogories1">
          <Link to="/Agreements">
            <div className="pricing pricing2 cheif">
              Cheif
              <br />
              <h4>90$</h4>
            </div>
          </Link>

          <Link to="/Agreements">
            <div className="pricing pricing2 cook ">
              {" "}
              Cooker
              <br />
              <h4>90$</h4>
            </div>
          </Link>
          <Link to="/Agreements">
            <div className="pricing pricing2 prepar">
              Preprations
              <br />
              <h4>80$</h4>
            </div>
          </Link>
          <Link to="/Agreements">
            <div className="pricing pricing2 mensar">
              Mensar
              <br />
              <h4>80$</h4>
            </div>
          </Link>
          <Link to="/Agreements">
            <div className="pricing pricing2 stewar">
              Stewar
              <br />
              <h4>70$</h4>
            </div>
          </Link>
          <Link to="/Agreements">
            <div className="pricing pricing2 cleaner">
              Cleaner
              <br />
              <h4>70$</h4>
            </div>
          </Link>
        </div>
      </div>

      <div className="buttompage employeelist">
        <div className="superEmployeeTitle">
          <div className="getWotkTitle">People who get Work</div>
          <p className="getWorkP">Any Single Cent They Deserv It</p>
          <p className="getWorkP">Honestly Is The Best In Out Worker </p>
        </div>
        <div className="imageteam">
          <div className="employeecard">
            <div className="teamavatar">
              <div>
                <img src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
                <h5>Adam Bshar</h5>
                <span>Cheif Work @ :</span>
                <span className="resturant">Shif Salad </span>
              </div>

              <div className="icons">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
          <div className="employeecard">
            <div className="teamavatar">
              <div>
                <img src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
                <h5>Adam Bshar</h5>
                <span>Cheif Work @ :</span>
                <span className="resturant">Shif Salad </span>
              </div>

              <div className="icons">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
          <div className="employeecard">
            <div className="teamavatar">
              <div>
                <img src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
                <h5>Adam Bshar</h5>
                <span>Cheif Work @ :</span>
                <span className="resturant">Shif Salad </span>
              </div>

              <div className="icons">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
         
          <div className="employeecard">
            <div className="teamavatar">
              <div>
                <img src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" />
                <h5>Adam Bshar</h5>
                <span>Cheif Work @ :</span>
                <span className="resturant">Shif Salad </span>
              </div>

              <div className="icons">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Box mt={0}>
        <Copyright />
      </Box>
    </div>
  );
};

export default Pricing;
