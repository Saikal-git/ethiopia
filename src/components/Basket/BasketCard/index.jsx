import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";

const BasketCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <div id="basketCard">
      <div className="basketCard">
        <a
          className=""
          onClick={() => dispatch({ type: "DELETE_BASKET", payload: el.id })}
        >
          <IoMdCloseCircleOutline />
        </a>
        <img src={el.img} alt="" />
        <h1>{el.title}</h1>
        <div className="basketCard--price">
          <h3>{el.price * el.quantity} с</h3>
          <div className="basketCard--price__btn">
            <button
              className="btn(-)"
              onClick={() =>
                dispatch({ type: "QUANTITY_DICREMENT", payload: el.id })
              }
            >
              -
            </button>
            <h1>{el.quantity}</h1>
            <button
              className="btn(+)"
              onClick={() =>
                dispatch({ type: "QUANTITY_INCREMENT", payload: el.id })
              }
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
