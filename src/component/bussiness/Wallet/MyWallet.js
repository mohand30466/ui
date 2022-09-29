import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

export default function Mywallet() {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={(e) => navigate("/home")}
        />
      </div>

    <div>
        My Wallet coming soom!
    </div>
    
    </>
  );
}
