
import './Rmain.css';
import {React,useEffect,useState} from 'react';
function Rmain(props) {
    const [gym,setGym]=useState([]);
    useEffect(()=>{
        fetch("http://localhost:4000/gym")
        .then(response=>{
          return response.json();
        })
        .then(data=>{
          setGym(data);
        });
    },[]);
    return (
        <>
         {gym.map((gym)=>(
            <div className="rap_main">    
        <>
        <img className="rap_main_img"  src={gym.img}alt="img"/>
        </>
        <div className="rap_main_plus">
        <div className="rap_main_name">{gym.name}</div>
        <div className="rap_main_price"> {gym.local} {gym.price}원</div>
        </div>
        <div className="rap_main_button">
        <button className="r_main_button" style={{ textDecoration: "none" ,color:"white"}} onClick={()=>{window.open("https://jamaicaseoul.modoo.at/")}}>링크 바로가기</button>
        </div>
        </div>
        ))} 
        </>
    );
}

export default Rmain;