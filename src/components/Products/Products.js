import './Products.css';
import React from "react";
import {FiSearch} from "react-icons/fi";
import { AiFillShopping} from "react-icons/ai";
import logo from '../img/mainlogo.jpg';

import Productsmanentire from './Productsmanentire';
import Productsmantop from './Productsmantop';
import Productsmanpants from './Productsmanpants';
import Productsmanouter from './Productsmanouter';
import Productsmanset from './Productsmanset';
import {Routes,Route} from 'react-router-dom';
import Productsmain from './Productsmain';

import Wentire from './Wentire';
import Wleggings from './Wleggings';
import Wjogger from './Wjogger';
import Wpants from './Wpants';
import Wtop from './Wtop';
import Wouter from './Wouter';

import Aids from './Aids';
import Aidsentire from './Aidsentire';
import Belt from './Belt';
import Strap from './Strap';
import Mat from './Mat';

import { useEffect,useState } from "react";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import SearchResults from "./SearchResults";

 function Products(){
  const [products,setProducts]=useState([]);
  const [isOpen,setMenu]=useState(false);
  const[isOpe,setMen]=useState(false);
  const[isOp,setMe]=useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [itemName, setItemName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

const toggleMenu =()=>{
  setMenu(isOpen=>!isOpen);
};
const toggleMen =()=>{
  setMen(isOpe=>!isOpe);
};
const toggleMe =()=>{
  setMe(isOp=>!isOp);
};

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

 const handleSearch = () => {
   if (itemName) {
     navigate(`/Products/SearchResults/${itemName}`);
   }
 };
 const handleChange = (event) => {
     setItemName(event.target.value);
 };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const itemName = params.get("itemName");
    setItemName(itemName || "");
  }, [location.search]);

  useEffect(() => {
  const token = localStorage.getItem("token");
  if (token) {
    setIsLoggedIn(true);
  } else {
    setIsLoggedIn(false);
  }
  }, [isLoggedIn]);

  return (
       <div className="Products">
        <div className="Sheader1">
    <div className="Sheader">
   
        <div className="s_logo"> 
        <Link to="/">
         <img src={logo} alt="logo"/>
         </Link> 
        </div>

                     <div className="s_input">
                       <input placeholder="원하시는 상품을 검색해 보세요" value={itemName} onChange={handleChange} />
                       <button onClick={handleSearch}>
                         <FiSearch size="22" />
                       </button>
                     </div>

        <div className="s_login">
          <Link to="/Cart" style={{ textDecoration: "none", color: "black" }}>
            <AiFillShopping size="33" />
          </Link>
          {isLoggedIn ? (
            <React.Fragment>
              <div className="s_log" onClick={handleLogout}>LOG OUT</div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
                <div className="s_log">LOGIN</div>
              </Link>
              <Link to="/Signup" style={{ textDecoration: "none", color: "black" }}>
                <div className="s_log">SIGN UP</div>
              </Link>
            </React.Fragment>
          )}
        </div>

      </div>
    </div>

    <aside className="aside_menu">
    <Link to="/Products" style={{ textDecoration: "none" }}><h1 className="main_main">메인으로</h1></Link>
            <div>
            <h3 className="main_man" onClick={()=>toggleMenu()}>남성의류</h3>
            <ul className={isOpen ? "show-menu":"hide-menu"}>
            <Link to ="manentire" style={{ textDecoration: "none" ,color:"black"}}><li className="show-menu1">전체</li></Link>
            <Link to ="mantop" style={{ textDecoration: "none" ,color:"black"}}><li className="show-menu1">상의</li></Link>
            <Link to ="manpants" style={{ textDecoration: "none" ,color:"black"}}><li className="show-menu1">하의</li></Link>
            <Link to ="manouter" style={{ textDecoration: "none" ,color:"black"}}><li className="show-menu1">아우터</li></Link>
            <Link to ="manset" style={{ textDecoration: "none" ,color:"black"}}><li className="show-menu1">세트</li></Link>
            </ul>
            </div>
            <div><h3 className="main_woman" onClick={()=>toggleMen()}>여성의류</h3>
            <ul className={isOpe?"show":"hide"}>
            <Link to ="wentire" style={{ textDecoration: "none" ,color:"black"}}><li className="show1">전체</li></Link>
            <Link to ="wleggings" style={{ textDecoration: "none" ,color:"black"}}><li className="show1">레깅스</li></Link>
            <Link to ="wjogger" style={{ textDecoration: "none" ,color:"black"}}><li className="show1">조거팬츠</li></Link>
            <Link to ="wouter" style={{ textDecoration: "none" ,color:"black"}}><li className="show1">아우터</li></Link>
            <Link to ="wpants" style={{ textDecoration: "none" ,color:"black"}}><li className="show1">하의</li></Link>
            <Link to ="wtops" style={{ textDecoration: "none" ,color:"black"}}><li className="show1">상의</li></Link>
            
            </ul>
            </div>
            <div><h3 className="main_aids" onClick={()=>toggleMe()}>보조기구</h3>
            <ul className={isOp?"sho":"hid"}>
            <Link to ="Aidsentire" style={{ textDecoration: "none" ,color:"black"}}><li className="sho1">전체</li></Link>
            <Link to ="Belt" style={{ textDecoration: "none" ,color:"black"}}><li className="sho1">벨트</li></Link>
            <Link to ="Strap" style={{ textDecoration: "none" ,color:"black"}}><li className="sho1">스트랩</li></Link>
            <Link to ="Mat" style={{ textDecoration: "none" ,color:"black"}}><li className="sho1">매트</li></Link>
        
            
            </ul>
            </div>


            <div> <Link to ="Aids/gym" style={{ textDecoration: "none" ,color:"black"}}><h3 className="main_gym">헬스장</h3></Link>
          
            </div>
            
          </aside>
          <Routes>
          
         <Route path="/*" element={<Productsmain/>}></Route>
        <Route path="SearchResults/:itemName" element={<SearchResults />} />
        <Route path="/manentire/*" element={<Productsmanentire products={products} setProducts={setProducts}/>}></Route>
        <Route path="mantop" element={<Productsmantop/>}></Route>
        <Route path="manpants" element={<Productsmanpants/>}></Route>
        <Route path="manouter" element={<Productsmanouter/>}></Route>
        <Route path="manset" element={<Productsmanset/>}></Route>

<Route path="wentire" element={<Wentire/>}></Route>
<Route path="wleggings" element={<Wleggings/>}></Route>
<Route path="wjogger" element={<Wjogger/>}></Route>
<Route path="wouter" element={<Wouter/>}></Route>
<Route path="wpants" element={<Wpants/>}></Route>
<Route path="Wtops" element={<Wtop/>}></Route>

<Route path="Aidsentire" element={<Aidsentire/>}></Route>
<Route path="Belt" element={<Belt/>}></Route>
<Route path="Strap" element={<Strap/>}></Route>
<Route path="Mat" element={<Mat/>}></Route>

<Route path="Aids/*" element={<Aids/>}></Route>


      </Routes>
    
      </div>
      

    );
   }
export default Products;

