import React, { useState, useEffect } from "react";
import { Api } from "../service/Api";
import Users from "./Users";
import Likes from "./Likes";
import "./home/home.css";
import { Container } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faThumbsUp,
  faSquarePlus,
  // faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [discription, setDiscription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState();
  const [time, setTime] = useState();
  const like = true;
  const poke = true;
  const navigate = useNavigate();

  const db = JSON.parse(localStorage.getItem("data"));
  const id = db.user_id;


const getout = ()=>{
  localStorage.removeItem("data")
  navigate("/")
}

  const openPostWindow = () => setOpen(!open);

  const postSubmit =  async (e) => {
    e.preventDefault();
    const uploadidata = new FormData();
    uploadidata.append("user", id);
    uploadidata.append("title", title);
    uploadidata.append("dis", discription);
    uploadidata.append("location", location);
    uploadidata.append("image", image, image.name);
    uploadidata.append("time", time);

    const posts = await Api.Bost(uploadidata)
      .then((res) => {
        console.log(res);
        if (res.id) setOpen(!open);
      })
      .catch((err) => console.log("hello theres some err!"));
  };

  useEffect(() => {
    const bostData = Api.GetBosts()
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [open, active]);

  const sendlikeclicked = (post) => {
    const sendlike = Api.Sendlikes({ user: id, post, like })
      .then((res) => setActive(!active))
      .catch((err) => console.log(err));
  };
  const sendApplications = (post) => {
    const sendlike = Api.SendAplications({ user: id, post, poke })
      .then((res) => setActive(!active))
      .catch((err) => console.log(err));
  };

  return (
    <div className="homeContainer">
      {!open?
      <div className="userpro">
        <div className="usersettings">
          <div className="nestedlink">
            <Link to="/bussiness"> <h4>  My Bussiness</h4></Link>
          </div>
      
          <div className="nestedlink">
            <Link to="/accounting">Accounting</Link>
          </div>
          <div className="nestedlink">
            <Link to="/mywallet">My Wallet</Link>
          </div>
          <div className="nestedlink">
            <Link to="/shoping">Shoping</Link>
          </div>
          <div className="nestedlink">
            <Link to="/Projectmanagement">Project management</Link>
          </div>

          <div className="nestedlink">Settings</div>
          <div className="nestedlink" onClick={e=>getout()}>Sign out</div>
        </div>
      </div>:null
      }

      <div className="postcontainer">
        <div>
          <div>
            <span>Create Bost </span>
            <FontAwesomeIcon
              icon={faSquarePlus}
              onClick={openPostWindow}
              className="createicon"
            />
          </div>
          {open ? (
            <div className="create1">
              <form onSubmit={postSubmit}>
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="job tittle"
                />
                <textarea
                  type="text"
                  onChange={(e) => setDiscription(e.target.value)}
                  placeholder="job discription"
                />
                <input
                  type="text"
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="location"
                />
                <input
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                <input
                  type="datetime-local"
                  onChange={(e) => setTime(e.target.value)}
                  placeholder="time"
                />

                <input type="submit" title="Submit" />
              </form>
            </div>
          ) : null}
        </div>

        <div className="posts"> 
          <h1 className="posttitle"> Bost lists</h1>

          {data &&
            data.map((item) => {
              return (
                <>
                  <div className="post">
                    <div
                      key={item.id}
                      onClick={(e) => navigate("/postdetail", { state: item })}
                    >
                      <p style={{ textAlign: "center",color:"green",fontSize:'25px' }}>{item.title}</p>
                      <p style={{ textAlign: "center",color:"blue" }}>{item.dis}</p>
                      <img className="stylee" src={item.image} alt="" />
                    </div>
                    <div className="rate" key={item.id}>
                      <div className="likeClick">
                        <span onClick={(e) => sendlikeclicked(item.id)}>
                          <span >{item.my_like.length}</span>
                          <Likes style={{ color:"yellow" }} db={faThumbsUp} className="fontAwsome" />
                        </span>
                      </div>
                      <div  className="likeClick">
                        <span
                         
                          onClick={(e) => sendApplications(item.id)}
                        >
                          <span   className="likeClick">{item.my_poke.length}</span>
                          <Likes style={{ color:"yellow" }} db={faHeart} className="fontAwsome" />
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      {!open ? (
        <div className="users">
          <Users />
        </div>
      ) : null}
    </div>
  );
}
