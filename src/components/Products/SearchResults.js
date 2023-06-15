import { useEffect,useState } from "react";
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const itemName = location.pathname.split("/").pop();

    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/search/${itemName}`);

        if (response.ok) {
          const data = await response.json();
          setSearchResults(data);

          data.forEach((item) => {
          });
        } else {
          console.error("Error fetching search results:", response.status);
        }
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    if (itemName) {
      fetchSearchResults();
    }
  }, [location.pathname]);

  return (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
    <div>
      {searchResults.map((item) => (
        <div key={item.id} className="item">
          <h3>검색결과</h3>
          <p>{item.itemNm}</p>
          <p>Price: {item.price}</p>
          <p>Detail: {item.itemDetail}</p>

        {item.images && (
            <div>
              {item.images.map((image) => (
                <img key={image.id}
                src={`http://localhost:8080/api/image/${item.id}/${image.id}`}
                alt="Item Image" style={{ width: '150px', height: '150px' }}  />
              ))}
            </div>
       )}
      </div>
      ))}
    </div>
  </div>
  );
}
export default SearchResults;







