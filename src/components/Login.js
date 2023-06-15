import React, { useState , useEffect } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./img/mainlogo.jpg";

import { login } from "./API/LoginAPI";

export default function Login() {
  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await login(formData);
      const token = response.data;
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      alert("로그인이 완료되었습니다.");
      navigate("/");
    } catch (error) {
      alert("로그인에 실패하였습니다.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

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
              <button onClick={handleLogout}>LOG OUT</button>
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
        <h1>Login</h1>
        <form onSubmit={handleFormSubmit}>
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
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFormChange}
              required
            />
            <label>Password</label>
          </div>
          <div className="pass">Forgot password?</div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <a href="/Signup">Signup</a>
          </div>
        </form>
      </div>
    </div>
  );
}
