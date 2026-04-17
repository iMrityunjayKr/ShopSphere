import "../styles/shop.css";
const baseUrl = import.meta.env.VITE_BASE_URL;
import { useState, useEffect } from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CategoryStrip from "../components/CategoryStrip";
import ProductCard from "../components/ProductCard";

function Shop() {
  const { searchItems, searchTerm } = useContext(CartContext);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/products`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  const filtered = allProducts
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase().trim()),
    )
    .sort((a, b) => {
      
      const aStarts = a.title
        .toLowerCase()
        .startsWith(searchTerm.toLowerCase().trim());
      const bStarts = b.title
        .toLowerCase()
        .startsWith(searchTerm.toLowerCase().trim());
      return aStarts === bStarts ? 0 : aStarts ? -1 : 1;
    });

  return (
    <div className="shop">
      {!searchTerm ? (
        <div className="category-shelves">
          <CategoryStrip categoryName="women's clothing" />
          <CategoryStrip categoryName="jewelery" />
          <CategoryStrip categoryName="electronics" />
          <CategoryStrip categoryName="men's clothing" />
        </div>
      ) : (
        <div className="search-results-container">
          <h2>
            Search Results for: <span>"{searchTerm}"</span>
          </h2>
          <div className="product-grid">
            {filtered.length > 0 ? (
              filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p>No products found matching "{searchTerm}"</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
