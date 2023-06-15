import {React,useEffect,useState} from 'react';
import './Details.css';
import logo from '../img/mainlogo.jpg';
import {FiSearch} from "react-icons/fi";
import {Link,useParams} from 'react-router-dom';
import { AiFillShopping} from "react-icons/ai";
import axios from "axios";

import { getItemsImage } from '../API/ItemAPI';

function Details(props) {
  const { id } = useParams();
  const [entires, setEntires] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/items/${id}`);
        const imageData = await getItemsImage(id);
        const dataWithImage = { ...response.data, img: imageData };
        setEntires(dataWithImage);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    };
    fetchData();
  }, [id]);

  if (!entires) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Details">
      <div className="Sheader1">
        <div className="Sheader">
          <div className="s_logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="s_input">
            <input placeholder="원하시는 상품을 검색해 보세요" />
            <button>
              <FiSearch size="22" />
            </button>
          </div>
          <div className="s_login">
            <Link to="/Cart" style={{ textDecoration: "none", color: "black" }}>
              <AiFillShopping size="33" />
            </Link>
            <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
              <div className="s_log">LOGIN</div>
            </Link>
            <Link to="/Signup" style={{ textDecoration: "none", color: "black" }}>
              <div className="s_log">SIGN UP</div>
            </Link>
          </div>
        </div>
      </div>

      <div className="detail_body">
        <div className="detail_body_center">
          <div className="center_right">
            <img className="center_right_img" src={entires.img} alt="img" />
          </div>
          <div className="center_left">
            <div className="center_left_mininame">임욱 상사</div>
            <h2>{entires.name}</h2>
            <div className="center_left_t">택배 배송/ 무료 배송</div>
            <hr></hr>
            <div className="center_left_num">
              <button>-</button>
              <div>1</div>
              <button>+</button>
            </div>
            <hr></hr>
            <div className="center_left_sum">
              <div>총 상품 금액</div>
              <div className="center_left_last">
                <div className="last_left">총 수량 1개</div>
                <h4>{entires.price}원</h4>
              </div>
            </div>
            <div className="center_left_button">
              <button className="button_left">바로 구매</button>
              <button className="button_right">장바구니</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
