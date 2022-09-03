import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./aboutus.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { faCoffee,faTwitter } from '@fortawesome/free-solid-svg-icons'






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

const Aboutus = () => {
  return (
    <div className="content">
      <div className="topaboutus">
        <div className="topcontent">
          <p className="title"> About us</p>
          <h1>we are here to make life easier for you</h1>
          <h1>we are here to make life easier for you</h1>
          <p> herei can write anything meaning full and i can attract the people by that sentenses</p>

        </div>
        <div className="partners">

          <div className="partner">Shilla</div>
          <div className="partner">Sivov Hashney</div>
          <div className="partner">Riverside</div>
          <div className="partner">Rami Levi</div>
          <div className="partner">Shipolet</div>
          <div className="partner">Dupnove8</div>


        </div>
        <div>
          <p>We have an amaing partner that can discripe our service to you</p>
          <p><span className="seprater"></span>Pone: 0547323026 <span className="seprater"></span><span>Email: directmanpower@gmail.com  </span><span className="seprater"></span></p>
        </div>

      </div>
      <div className="middlepage">
        <div className="rightside">
          <h1>Our Goal in This Projecta</h1>
          <p> orivide good quality manpower in short time</p>
          <p> orivide good quality manpower in short time</p>
          <p> orivide good quality manpower in short time</p>
          <p> orivide good quality manpower in short time</p>
          <ol>
            <li>part one</li>
            <li>part one</li>
            <li>part one</li>
            <li>part one</li>
            <li>part one</li>
            <li>part one</li>
            <li>part one</li>
          </ol>

        </div>
        <div className="leftside">
          <div className="top">
            <div className="first">
              <div className="line"></div>
              <div className="info">
                <h1>2.5M</h1>
                <p>Members get works</p>
              </div>
            </div>
            <div>
            
            <div className="line"></div>
            <div className="info">
                <h1>2.5M</h1>
                <p>Members get works</p>
              </div>
              </div>
          </div>
          <div className="right">
          
            <div>
            <div className="line"></div>
            <div className="info">
                <h1>2.5M</h1>
                <p>Members get works</p>
              </div>

            </div>
            <div>
            <div className="line"></div>
            <div className="info">
                <h1>2.5M</h1>
                <p>Members get works</p>
              </div>

            </div>
            </div>

        </div>

      </div>
      <div className="buttompage">
        <div className="topteam">
          <h1>Company leaders and Team</h1>
          <p>loren ibsaom bla laalalalalalalalallalal</p>
          <p>loren ibsaom </p>
        </div>
        <div className="imageteam">
          <div className="card">
            <div className="teamavatar">
              <div>
                <img src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"/>
                <h5>Adam Bshar</h5>
                <p>Co-founder</p>
              </div>
              <div className="hoby">
                <p>Love swimming and riding :)</p>
              </div>
              <div className="icons">
                   <FontAwesomeIcon icon={faCoffee} />
                   <FontAwesomeIcon icon={faCoffee} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="teamavatar">
              <div>
                <img src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"/>
                <h5>Adam Bshar</h5>
                <p>Co-founder</p>
              </div>
              <div className="hoby">
                <p>Love swimming and riding :)</p>
              </div>
              <div className="icons">
                   <FontAwesomeIcon icon={faCoffee} />
                   <FontAwesomeIcon icon={faCoffee} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="teamavatar">
              <div>
                <img src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"/>
                <h5>Adam Bshar</h5>
                <p>Co-founder</p>
              </div>
              <div className="hoby">
                <p>Love swimming and riding :)</p>
              </div>
              <div className="icons">
                   <FontAwesomeIcon icon={faCoffee} />
                   <FontAwesomeIcon icon={faCoffee} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="teamavatar">
              <div>
                <img src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"/>
                <h5>Adam Bshar</h5>
                <p>Co-founder</p>
              </div>
              <div className="hoby">
                <p>Love swimming and riding :)</p>
              </div>
              <div className="icons">
                   <FontAwesomeIcon icon={faCoffee} />
                   <FontAwesomeIcon icon={faCoffee} />
              </div>
            </div>
          </div>
          <div className="card">
            <div className="teamavatar">
              <div>
                <img src="https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg"/>
                <h5>Adam Bshar</h5>
                <p>Co-founder</p>
              </div>
              <div className="hoby">
                <p>Love swimming and riding :)</p>
              </div>
              <div className="icons">
                   <FontAwesomeIcon icon={faCoffee} />
                   <FontAwesomeIcon icon={faCoffee} />
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

export default Aboutus;
