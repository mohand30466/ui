import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Likes = ({ db,style,send }) => {


    
  return (
    <div>
      <FontAwesomeIcon style={style} icon={db}  />
    </div>
  );
};

export default Likes;
