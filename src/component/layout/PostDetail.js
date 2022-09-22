import { ContentCutOutlined } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Api } from "../service/Api";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "./postDetail.css";

const PostDetail = () => {
  const { state } = useLocation();
  const data = JSON.parse(localStorage.getItem("udata"));
  const navigate = useNavigate();

  return (
    <div className="containerDetails">
      <div className="arrowBack" onClick={(e) => navigate("/home")}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </div>
      <div className="contents">
        {state && (
          <>
            <div className="postDetailInfo">
              <p className="title">{state.title}</p>
              <p className="discriptions">{state.dis}</p>
              <p>{state.location}</p>
              <p>{state.time}</p>
              <p className="titles">Applications</p>
              <div>{state.my_poke.length}</div>
              <p className="titles">Likes</p>
              <div>{state.my_like.length}</div>
              <button onClick={e=>navigate("/messages", { state: state })}>send message</button>
            </div>
            <div className="mypostAvatar">
              <img src={state.image} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
