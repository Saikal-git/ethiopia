import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    // arrows: false,
    slidesToScroll: 3,
  };
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <div id="category">
      <div className="container">
        <div className="category">
          <Slider {...settings}>
            <div>
              <button onClick={() => nav(`/category/Завтрак`)}>Завтрак</button>
            </div>
            <div>
              <button onClick={() => nav(`/category/Суши`)}>Суши</button>
            </div>
            <div>
              <button onClick={() => nav(`/category/Суп`)}>Суп</button>
            </div>
            <div>
              <button onClick={() => nav(`/category/Пицца`)}>Пицца</button>
            </div>
            <div>
              <button onClick={() => nav(`/category/Салаты`)}>Салаты</button>
            </div>
            <div>
              <button onClick={() => nav(`/category/Десерты`)}>Десерты</button>
            </div>
            <div>
              <button onClick={() => nav(`/category/ Холодные напитки`)}>
                Холодные напитки
              </button>
            </div>
            <div>
              <button onClick={() => nav(`/category/Кофе`)}>Кофе</button>
            </div>
            <div>
              <button onClick={() => nav(`/category/Чай`)}>Чай</button>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Category;
