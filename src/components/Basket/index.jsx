import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasketCard from "./BasketCard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoIosCloseCircleOutline } from "react-icons/io";
import load from "../../assets/img/load2.jpg";
import { FcApproval } from "react-icons/fc";

const Basket = ({ el }) => {
  const { basket } = useSelector((s) => s.bas);
  const [userAdress, setUserAdress] = useState("");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalText, setModalText] = useState(false);
  const [success, setSuccess] = useState(false);
  console.log(basket, "basket");
  const nav = useNavigate();
  const dispatch = useDispatch();
  const total = basket.reduce((acc, el) => {
    return acc + +el.price * el.quantity;
  }, 0);

  useEffect(() => {
    window.scrollTo(10, 0);
  }, []);

  const forSubmit = () => {
    const my_id = `-1002076889796`;
    const token = `7085953685:AAHTT_K1w4wBEHFfsjSzK31al2rUTJMUTZM`;
    const url_api = `https://api.telegram.org/bot${token}/sendMessage`;

    if (userAdress.trim() === "") {
      alert("Пожалуйста напиши свой адрес!");
    } else {
      let newOrder = {
        chat_id: my_id,
        parse_model: "html",
        text: `orderMenu:
         adress: ${userAdress},
        `,
      };
      setTimeout(() => {
        axios.post(url_api, newOrder);
        setLoading(false);
        setSuccess(true);
      }, 2000);
      setLoading(true);
      setModalText(true);
      setUserAdress("");
    }
  };

  const openModal = () => {
    if (userAdress.trim() === "") {
      alert("Пожалуйста напиши свой адрес!");
    } else {
      setModal(true);
    }
  };
  const resetState = () => {
    setLoading(false);
    setModalText(false);
    setSuccess(false);
  };
  useEffect(() => {
    resetState();
  }, [modal]);

  return (
    <div id="basket">
      <div className="container">
        {basket.length ? (
          <div className="">
            <div className="basket">
              {basket.map((el) => (
                <BasketCard el={el} key={el.id} />
              ))}
            </div>
            <div className="info">
              <div className="">
                <div className="info--block1">
                  <input
                    onChange={(e) => setUserAdress(e.target.value)}
                    value={userAdress}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        openModal();
                      }
                    }}
                    type="text"
                    placeholder="Адрес доставки"
                  />
                  <div className="info--block1__btns">
                    <button className="info--block1__btns--ok">Ок </button>
                    <button className="info--block1__btns--otmena">
                      Отмена
                    </button>
                  </div>
                </div>
                <div className="block1btns">
                  <button className="block1Btn" onClick={() => nav(`/`)}>
                    Добавить еще
                  </button>
                  <button
                    className="block1Btn"
                    onClick={() => dispatch({ type: "REMOVE_ALL" })}
                  >
                    Очистить корзину
                  </button>
                </div>
              </div>
              <div className="info--block2">
                <div className="info--block2__total">
                  <h1>Общая сумма</h1>
                  <h1>{total} сом</h1>
                </div>
                <div className="info--block2__btn">
                  <button onClick={() => openModal()}>Заказать</button>
                </div>
              </div>
            </div>
            {modal ? (
              <div className="modalBg">
                {!modalText ? (
                  <>
                    <h1>Вы подтверждаете свой заказ?</h1>
                    {userAdress ? (
                      <h3>{userAdress}</h3>
                    ) : (
                      "Пожалуйста напиши свой адрес!"
                    )}
                    <button onClick={() => forSubmit()}>Подтверждаю</button>
                  </>
                ) : null}
                {loading ? <img src={load} alt="img" width={150} /> : null}
                {success ? (
                  <div className="success">
                    <a className="">
                      <FcApproval />
                    </a>
                    <h1 className="">Продукт успешно отпроавлен!</h1>
                  </div>
                ) : null}
                <a className="modalClose" onClick={() => setModal(false)}>
                  <IoIosCloseCircleOutline />
                </a>
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Basket;
