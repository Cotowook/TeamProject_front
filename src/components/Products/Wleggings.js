import {React,useEffect,useState} from 'react';
import './Productsmanentire.css';
import { getItemsImage } from '../API/ItemAPI';
import {Link} from 'react-router-dom';

function Wleggings() {
    const [go,setGo]=useState([]);

      useEffect(() => {
          const fetchItems = async () => {
            const itemIds = [116, 118, 120];
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
           {go.map((massage) => (
             <div className="main_1">
               <Link to={`/products/main/${massage.id}`} style={{ textDecoration: "none", color: "black" }}>
                 <img className="main1_img" src={massage.img} alt="img" />
                 <div className="main1_text">
                   <h3>{massage.name}</h3>
                   가격: {massage.price}원
                 </div>
               </Link>
             </div>
           ))}
         </div>
       </div>
     </div>
   );

}

export default Wleggings;