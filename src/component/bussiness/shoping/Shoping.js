import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

export default function Shoping() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={(e) => navigate("/home")}
        />
      </div>
      <div>Shoping coming soom!</div>
      <h1>here you can buy anything you want and you can sell or exchange items</h1>
    </>
  );
}
