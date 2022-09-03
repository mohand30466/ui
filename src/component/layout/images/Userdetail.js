import React, { useState } from "react";
import { useLocation } from "react-router";
const Userdetail = () => {
  const [active, setactive] = useState(true);


  const { state } = useLocation();
  const obj = {};
  obj.name = state.username;
  obj.email = state.email;
  obj.address = state.profile.address;
  obj.phone = state.profile.phone;
  obj.job = state.profile.profisional;
  obj.avatar = state.profile.image;

  console.log(obj);
  const style = {
    avatarcontainer: {
      width: "100vw",
      height: "50vh",
      display: "flex",
      justifyContent: "center",
      background: "gray",
    },
    avatar: {
      width: "50%",
      height: "100%",
    },
    active: {
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      background: "green",
    },
  };

  return (
    <div>
      <p>
        Here is: <strong>{obj.name} </strong> information wishing you good luck{" "}
      </p>
      <div>
        {obj && (
          <div key={obj.length}>
            <div style={style.avatarcontainer}>
              <img style={style.avatar} src={obj.avatar} alt={obj.name} />
              <div
                onClick={(e) => setactive(!active)}
                style={active ? style.active : null}
              ></div>
            </div>
            <p>{obj.name}</p>
            <p>{obj.job}</p>
            <p>{obj.address}</p>
            <p>{obj.phone}</p>
            <p>{obj.email}</p>
            <button>Send message</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Userdetail;
