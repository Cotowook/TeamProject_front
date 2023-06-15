import './Productsmanentire.css';
import {React,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {  getItemsImage } from '../API/ItemAPI';

function Wpants() {
  const [go,setGo]=useState([]);

   useEffect(() => {
           const fetchItems = async () => {
             const itemIds = [76, 82, 88];
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
                     {go.map((product) => (
                       <div className="main_1" key={product.id}>
                       <Link to={`/products/main/${product.id}`} style={{ textDecoration: "none" ,color:"black"}}>
                         <img className="main1_img" src={product.img} alt="img" />
                         <div className="main1_text">
                           <h3>{product.name}</h3>
                           가격: {product.price}원
                         </div>
                         </Link>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
             );
}

export default Wpants;