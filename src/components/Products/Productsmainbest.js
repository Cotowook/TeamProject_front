import React, { useEffect, useState } from 'react';
import './Productsmainbest.css';
import { Link } from 'react-router-dom';

import { getItemsImage } from '../API/ItemAPI';

function Productsmainbest(props) {
  const [bests, setBests] = useState([]);

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
      setBests(items);
    };
    fetchItems();
  }, []);

  return (
    <>
      {bests.map((best) => (
        <div className="main_best1" key={best.id}>
          <Link to={`/products/manentire/${best.id}`} style={{ textDecoration: "none", color: "black" }}>
            <img className="main_img1" src={best.img} alt="img" />
            <div className="main_text1">
              <h2>{best.name}</h2>
              {best.price}원
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default Productsmainbest;
