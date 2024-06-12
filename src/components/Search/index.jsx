import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard";

const Search = () => {
  const { search } = useSelector((s) => s.create);
  return (
    <div id="home">
      <div className="container">
        <div className="home">
          {search.map((el) => (
            <ProductCard el={el} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
