import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard";

const CategoryChange = () => {
  const { product } = useSelector((s) => s.create);
  let { proTitle } = useParams();
  let filterCategory = product.filter((el) => el.category === proTitle);
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          {filterCategory.map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryChange;
