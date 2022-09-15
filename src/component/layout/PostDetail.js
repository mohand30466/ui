import { ContentCutOutlined } from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Api } from "../service/Api";

const PostDetail = () => {
//   const [active, setactive] = useState(true);
//   const [userinfo, setUserinfo] = useState([]);

  const { state } = useLocation();


  return (
    <div >
      Post detail
    </div>
  );
};

export default PostDetail;
