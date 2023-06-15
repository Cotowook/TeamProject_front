import React, { useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./img/mainlogo.jpg";

import { signup } from "./API/LoginAPI";

export default function Signup() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    address: "",
  });

  const handleFormChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(formData);
      alert("회원가입이 완료되었습니다.");
      navigate("/LogIn");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };
  const buttonData = [
    { label: "PRODUCTS", path: "/Products" },
    { label: "COMMUNITY", path: "/Community" },
    { label: "TODO LIST", path: "/Todos" },
  ];

  return (
     <div>
       <span className="banner">
         <Link to="/">
           <div>
             <img className="bannerLogo" src={logo} alt="logo" />
           </div>
         </Link>
         <div className="banner_btnItems">
           <div className="left-buttons">
             {buttonData.map((button) => (
               <button
                 className="bannerBtn"
                 key={button.path}
                 onClick={() => navigateTo(button.path)}
               >
                 {button.label}
               </button>
             ))}
           </div>
           <div className="right-buttons">
             {isLoggedIn ? (
               <button>LOG OUT</button>
             ) : (
               <React.Fragment>
                 <button
                   className="bannerBtn"
                   onClick={() => navigateTo("/SignUp")}
                 >
                   SIGN UP
                 </button>
                 <button
                   className="bannerBtn"
                   onClick={() => navigateTo("/LogIn")}
                 >
                   LOG IN
                 </button>
               </React.Fragment>
             )}
           </div>
         </div>
       </span>
       <div className="center">
         <h1>Sign up</h1>
         <form method="post" onSubmit={handleFormSubmit}>
           <div className="txt_field">
             <input
               type="text"
               name="name"
               value={formData.name}
               onChange={handleFormChange}
               required
             />
             <label>User Name</label>
           </div>
           <div className="txt_field">
             <input
               type="password"
               name="password"
               value={formData.password}
               onChange={handleFormChange}
               required
             />
             <label>Password</label>
           </div>
           <div className="txt_field">
             <input
               type="text"
               name="email"
               value={formData.email}
               onChange={handleFormChange}
               required
             />
             <label>Email</label>
           </div>
           <div className="txt_field">
             <input
               type="text"
               name="address"
               value={formData.address}
               onChange={handleFormChange}
               required
             />
             <label>Address</label>
           </div>
           <input type="submit" value="Sign up" />
         </form>
       </div>
     </div>
   );
 }