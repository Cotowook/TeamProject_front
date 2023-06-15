import {React,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import './Productsmanentire.css';
import { getItemsImage } from '../API/ItemAPI';

function Productsmantire() {
    const [go,setGo]=useState([]);

   useEffect(() => {
         const fetchItems = async () => {
           const itemIds = [4, 10, 76, 82, 94, 100, 122, 124];
           const fetchPromises = itemIds.map(async (itemId) => {
             const image = await getItemsImage(itemId);
             const response = await fetch(`http://localhost:8080/api/items/${itemId}`);
             const data = await response.json();
             return { ...data, img: image };
           });
           const items = await Promise.all(fetchPromises);
           setGo(items);
         };
         fetchItems();
       }, []);

    return (
        <div className="Productsmanentire">
    <div className="shopping_main">
      <div className="shopping_1">
      {go.map((products)=>(
        
        <div className="main_1">
        <Link to={`/products/manentire/${products.id}`} style={{ textDecoration: "none" ,color:"black"}}>
            <img className="main1_img"  src={products.img}alt="img"/>
            <div className="main1_text"><h3>{products.name}</h3>
            가격:{products.price}원
            </div>
            </Link>  
            </div>
            
        ))}
</div>
    </div>
    </div> 
    );
}

export default Productsmantire;