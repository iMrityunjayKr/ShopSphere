const baseUrl = import.meta.env.VITE_BASE_URL;
import { useState, useEffect } from "react";
import "../styles/categoryStrip.css";
import ProductCard from "./ProductCard";

function CategoryStrip({ categoryName }) {
  const [product, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, [categoryName]);

  return (
    <div className="category-section">
      <h2 className="category-title">{categoryName}</h2>
      <div className="category-container">
        {product.map((item) => (
          <ProductCard key={item.key} product={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryStrip;
