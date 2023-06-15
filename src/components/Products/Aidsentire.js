
import {React,useEffect,useState} from 'react';
import './Productsmanentire.css';

function Aidsentire(props) {
  const [go,setGo]=useState([]);
  useEffect(()=>{
      fetch("http://localhost:4000/products")
      .then(response=>{
        return response.json();
      })
      .then(data=>{
        setGo(data);
      });
  },[]);
    return (
        <div className="Productsmanentire">
    
        <div className="shopping_main">
          <div className="shopping_1">
          {go.map((products)=>(
        <div className="main_1">
            <img className="main1_img"  src={products.img}alt="img"/>
            <div className="main1_text"><h3>{products.name}</h3>
            가격:{products.price}원
            </div>
            </div>  
        ))}
    </div>
        </div>
        </div> 
    );
}

export default Aidsentire;