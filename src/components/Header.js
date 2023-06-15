import React, { useEffect, useState } from "react";
import "./Header.css";
import logo from "./img/mainlogo.jpg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import SearchResults from "./Products/SearchResults";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [itemName, setItemName] = useState("");
  const location = useLocation();

  const navigate = useNavigate();
  const navigateTo = (path) => {
    navigate(path);
  };

  const buttonData = [
    { label: "PRODUCTS", path: "/Products" },
    { label: "COMMUNITY", path: "/Community" },
    { label: "PERSONAL", path: "/Personal" },
  ];

  const handleSearch = () => {
    if (itemName) {
      navigate(`/Products/SearchResults/${itemName}`);
    }
  };

  const handleChange = (event) => {
    setItemName(event.target.value);
  };

  const handleLogout = () => {
    // 로그아웃 로직을 구현하고 필요한 동작을 수행합니다.
    setIsLoggedIn(false);
    // 추가로 필요한 로그아웃 동작을 수행할 수 있습니다.
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const itemName = params.get("itemName");
    setItemName(itemName || "");
  }, [location.search]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // 토큰의 존재 여부에 따라 로그인 상태 설정
  }, []);

  return (
    <div className="top-banner">
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
            <div className="searchForm">
              <input
                className="inputForm"
                placeholder="무엇이 궁금하세요?"
                value={itemName}
                onChange={handleChange}
              />
              <button className="searchBtn" onClick={handleSearch}>
                <FiSearch />
              </button>
            </div>

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
    </div>
  );
}

