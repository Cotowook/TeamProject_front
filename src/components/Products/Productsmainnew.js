import {React,useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import { getItemsImage } from '../API/ItemAPI';

import './Productsmainnew.css';
function Productsmainnew(props) {
    const [news,setNews]=useState([]);

    useEffect(() => {
        const fetchItems = async () => {
          const itemIds = [4, 10, 16];
          const fetchPromises = itemIds.map(async (itemId) => {
            const image = await getItemsImage(itemId);
            const response = await fetch(`http://localhost:8080/api/items/${itemId}`);
            const data = await response.json();
            return { ...data, img: image };
          });
          const items = await Promise.all(fetchPromises);
          setNews(items);
        };
        fetchItems();
      }, []);

    return (
       <>
           {news.map((massage)=>(
         <div className="main_new1">
                           <Link to={`/products/main/${massage.id}`} style={{ textDecoration: "none" ,color:"black"}}> 
                            <img className="new_img1"  src={massage.img}alt="img"/>
                            <div className="new_text1"><h2>{massage.name}</h2>{massage.price} 원</div>
                            </Link>  
                            </div>
                            
                            ))}
         </>               
    );
}

export default Productsmainnew;