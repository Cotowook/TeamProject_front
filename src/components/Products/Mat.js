import {React,useEffect,useState} from 'react';
import './Productsmanentire.css';

function Mat(props) {
    const [go,setGo]=useState([]);
       
    useEffect(()=>{
        fetch("http://localhost:4000/massage")
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
          {go.map((massage)=>(
        <div className="main_1">
            <img className="main1_img"  src={massage.img}alt="img"/>
            <div className="main1_text"><h3>{massage.name}</h3>
            가격:{massage.price}원
            </div>
            </div>  
        ))}
    </div>
        </div>
        </div> 
    );
}

export default Mat;