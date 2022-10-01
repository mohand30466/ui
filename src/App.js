import React from "react";
import "./App.css";
import Main from "./component/layout/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import {Header} from "./component/layout/Header";
import Signin from "./component/auth/SingIn/SignIn";
import SignUp from "./component/auth/SignUp/SignUp";
import UserProfile from "./component/auth/Userprofile/Userprofile";
import UserAcount from "./component/User/Useraccount";
import Updateaccount from "./component/User/Updateaccount";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthProvider } from "./component/useContex/Contex";
import Home from "./component/layout/Home";
import Userdetail from "./component/layout/Userdetail";
import Messages from './component/layout/Messages'
import ContactUs from "./component/User/Contactus";
import Aboutus from "./component/layout/Aboutus";
import Partners from "./component/layout/images/Partners";
import Plog from "./component/layout/Plog";
import Pricing from "./component/layout/Pricing";
import Agreements from "./component/layout/Agreements";
import Mybussiness from "./component/bussiness/Mybussiness";
import Shift from "./component/bussiness/Shifts";
import Staffs from "./component/bussiness/Staff";
import Cards from "./component/bussiness/Cards";
import BussinessDetail from "./component/bussiness/bussinessDetail";
import PostDetail from "./component/layout/PostDetail";
import UpdateBussiness from "./component/bussiness/UpdateBussines";
import Wallet from "./component/bussiness/Wallet/MyWallet"
import Accounting from "./component/bussiness/Accounting/Accounting"
import Projectmanagement from "./component/bussiness/ProjectManagment/Projectmanagement";
import Shoping from "./component/bussiness/shoping/Shoping";

function App() {
  let user = "user";

  return (
    <>
      <BrowserRouter>
        <Header />
    

        <AuthProvider user={user}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/account" element={<UserAcount />} />
            <Route path="/updateaccount" element={<Updateaccount />} />
            <Route path="/home" element={<Home />} />
            <Route path="/userdetail" element={<Userdetail />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/About" element={<Aboutus />} />
            <Route path="/Partners" element={<Partners />} />
            <Route path="/Plog" element={<Plog />} />
            <Route path="/Pricing" element={<Pricing />} />
            <Route path="/Agreements" element={<Agreements />} />
            <Route path="/bussiness" element={<Mybussiness />} />
            <Route path="/staff" element={<Staffs />} />
            <Route path="/shift" element={<Shift />} />
            <Route path="/Card" element={<Cards />} />
            <Route path="/bussinessdetail" element={<BussinessDetail />} />
            <Route path="/postdetail" element={<PostDetail />} />
            <Route path="/updatebussiness" element={<UpdateBussiness />} />
            <Route path="/mywallet" element={<Wallet/>} />
            <Route path="/accounting" element={<Accounting />} />
            <Route path="/projectmanagement" element={<Projectmanagement />} />
            <Route path="/shoping" element={<Shoping />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

// <div>
//   <Header />
//   <Switch>

//     <Route exact path="/">
//       <Hero />
//       <MovieList />
//     </Route>

//     <Route exact path="/latest">
//     <Latestmovie/>
//     </Route>
