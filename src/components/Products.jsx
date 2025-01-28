import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const pageNumber = 0;
  const pageSize = 5;

  useEffect(() => {
    fetch(
      `http://localhost:8080/api/products/all-by?pageNumber=${pageNumber}&pageSize=${pageSize}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [products]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
