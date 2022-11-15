import React, { useState } from "react";
// import { useAuth } from "../../useContex/Contex";
import { Api } from "../../service/Api";
// import { useLocation } from "react-router";
import { useNavigate } from "react-router";

const UserProfile = () => {
  const [avatar, setavatar] = useState();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [profisional, setProfisional] = useState("");
  const rememberMe = JSON.parse(localStorage.getItem("data"))
  const navigate = useNavigate()
  const userid = rememberMe.id
  console.log(rememberMe.name);
  console.log(userid);
  


  const UserProfileClick = async (e) => {
    e.preventDefault();
    const uploadAvatar = new FormData();

    uploadAvatar.append("user", userid);
    uploadAvatar.append("address", address);
    uploadAvatar.append("phone", phone);
    uploadAvatar.append("profisional", profisional);
    uploadAvatar.append("avatar", avatar, avatar.name);
   

    const profileData = await Api.UpdateUserProfile(uploadAvatar)
      .then((res) => {
        if(res.id)
           console.log(res)
           localStorage.removeItem("data");
           navigate("/signin")

        }  )
    
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>
        welcome set up your profile {rememberMe.username} {rememberMe.id}
      </h1>
      <form onSubmit={UserProfileClick}>
        <label>Phone</label>
        <br />
        <input type="file" onChange={(e) => setavatar(e.target.files[0])} />

        <br />
        <input
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setProfisional(e.target.value)}
          placeholder="Profisional"
        />
        <br />
        <br />
       
       

        <button type="supmit">Submit</button>
      </form>
    </div>
  );
};

export default UserProfile;
