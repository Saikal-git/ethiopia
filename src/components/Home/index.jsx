import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Home = () => {
  const { product } = useSelector((s) => s.create);
  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          {product.map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
