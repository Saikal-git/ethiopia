// import React, { useState } from "react";
// import { IoMdCloseCircleOutline } from "react-icons/io";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const ProductCard = ({ el }) => {
//   const dispatch = useDispatch();
//   const { basket } = useSelector((s) => s.bas);
//   const nav = useNavigate();
//   const someBas = basket?.some((item) => item.id === el.id);
//   const [mouse, setMouse] = useState(false);

//   return (
//     <div id="productCard">
//       <div className="productCard">
//         <a
//           className=""
//           onClick={() => dispatch({ type: "DELETE_PRODUCT", payload: el.id })}
//         >
//           <IoMdCloseCircleOutline />
//         </a>
//         <img src={el.img} alt="img" />
//         <h1>{el.title}</h1>
//         <p>{el.description.slice(0, 20) + "  ..."}</p>
//         <h3>{el.price * el.quantity} сом</h3>
//         <div className="productCard--btn">
//           <div className="productCard--btn__left">
//             <button
//               className="btn(-)"
//               onClick={() =>
//                 dispatch({ type: "QUANTITY_DICREMENT", payload: el.id })
//               }
//             >
//               -
//             </button>
//             <h1>{el.quantity}</h1>
//             <button
//               className="btn(+)"
//               onClick={() =>
//                 dispatch({ type: "QUANTITY_INCREMENT", payload: el.id })
//               }
//             >
//               +
//             </button>
//           </div>
//           <div className="productCard--btn__right">
//             <button
//               style={{
//                 border: someBas ? "red" : "",
//               }}
//               onClick={() =>
//                 someBas
//                   ? nav(`/basket`)
//                   : dispatch({ type: "ADD_TO_BASKET", payload: el })
//               }
//             >
//               {someBas ? "добавлено" : " В корзину"}
//             </button>
//           </div>
//           <div
//             style={{
//               cursor: "pointer",
//               transition: "1s",
//               transform: mouse ? "translateY(-100px)" : "translateY(0px)",
//               opacity: mouse ? "1" : "0",
//             }}
//             className="w-[700px] bg-gray-300 p-[30px] rounded-[30px] "
//           >
//             <p
//               style={{
//                 width: "600px",
//                 fontSize: "20px",
//                 margin: "30px 0",
//               }}
//             >
//               <i
//                 style={{
//                   width: "700px",
//                 }}
//                 className="w-[500px]"
//               >
//                 "{el.description}"
//               </i>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ el }) => {
  const dispatch = useDispatch();
  const { basket } = useSelector((s) => s.bas);
  const nav = useNavigate();
  const someBas = basket?.some((item) => item.id === el.id);
  const [mouse, setMouse] = useState(false);

  return (
    <div id="productCard">
      <div className="productCard">
        <a
          className=""
          onClick={() => dispatch({ type: "DELETE_PRODUCT", payload: el.id })}
        >
          <IoMdCloseCircleOutline />
        </a>
        <img src={el.img} alt="img" />
        <h1>{el.title}</h1>
        <p
          onMouseOver={() => setMouse(true)}
          onMouseOut={() => setMouse(false)}
        >
          {el.description?.slice(0, 30) + "  ..."}
        </p>
        <h3>{el.price * el.quantity} сом</h3>
        <div className="productCard--btn">
          <div className="productCard--btn__left">
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
          <div className="productCard--btn__right">
            <button
              style={{
                border: someBas ? "red" : "",
              }}
              onClick={() =>
                someBas
                  ? nav(`/basket`)
                  : dispatch({ type: "ADD_TO_BASKET", payload: el })
              }
            >
              {someBas ? "добавлено" : " В корзину"}
            </button>
          </div>
        </div>
        <div
          className="mouseModal"
          style={{
            transition: "1s",
            transform: mouse ? "translateY(-100px)" : "translateY(0px)",
            opacity: mouse ? "1" : "0",
          }}
          onMouseEnter={() => setMouse(true)}
          onMouseLeave={() => setMouse(false)}
        >
          <p>
            <i>"{el.description}"</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
