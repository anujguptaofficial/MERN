import React, { useEffect, useState } from "react";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [err, setErr] = useState("")

  useEffect(() => {
    const productsUrl = "https://fakestoreapi";

    fetch(productsUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        setErr("Error fetching products:", error.message);
      });
  }, []);

  return (
    <div>
      <h1>Hi there</h1>
      {err? err : 
      products.map((product) => (
        <div key={product.id}>
          <div>{product.category}</div>
          <div>{product.title}</div>
          <div>{product.description}</div>
          <div>{`Price: ${product.price}`}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
