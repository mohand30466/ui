import React, { useState } from "react";
// import { useAuth } from "../useContex/Contex";
import { Api } from "../service/Api";
import "./Updateaccount.css";
import { useLocation } from "react-router";

function Updateaccount() {

  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [profisional, setProfisional] = useState('')
  const [avatar, setAvatar] = useState('');
  const {state}= useLocation()
  const user = state.user
  

  

  const UserProfileClick = (e) => {
    e.preventDefault();
    const id = state.id
    const uploadData = new FormData();
    uploadData.append("user", user);
    uploadData.append("address", address);
    uploadData.append("phone", phone);
    uploadData.append("profisional", profisional);
    uploadData.append("avatar", avatar);
    console.log(uploadData);

    const profile =  Api.UpdateUserProfile(id,uploadData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="updatecontainer">
      <h5>
        Welcome and set up your account ,profile
      </h5>
      <div className="formcontainer">
        <form onSubmit={UserProfileClick}>

          <input
            type="text"
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />

          <input
            type="text"
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
          />

          <input
            type="text"
            onChange={(e) => setProfisional(e.target.value)}
            placeholder="Profisional"
          />
          <input type="file" onChange={(e) => setAvatar(e.target.files[0])} />

          <button type="supmit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Updateaccount;
