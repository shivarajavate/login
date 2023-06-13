import React, { useEffect, useState } from "react";
import "./App.css";
import getProducts from "./services/products";
import getProduct from "./services/product";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState(Object);

  useEffect(() => {
    getProducts().then((response) => {
      const { products } = response;
      setProducts(products);
    });
    getProduct("1").then((response) => {
      setProduct(response);
    });
  }, []);

  const selectProduct = (id: string) => {
    getProduct(id).then((response) => {
      setProduct(response);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Products</h1>
        <ul>
          {
            products.map((p, i) => {
              return <li key={i} onClick={() => selectProduct(p["id"])}>{p["title"]}</li>;
            })
          }
        </ul>
        <h1>Product</h1>
        <ul>
          {
            Object.keys(product).map((key, i) => {
              return <li key={i}>{product[key]}</li>;
            })
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
