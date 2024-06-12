import React, { useState } from "react";
import logo from "../../assets/img/logo.png";
import { IoSearchOutline } from "react-icons/io5";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaUserTie } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import React, { useEffect } from "react";

const Header = () => {
  const [typeInput, setTypeInput] = useState(false);
  const [modal, setModal] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const nav = useNavigate();
  const dispatch = useDispatch();

  const checkPassword = () => {
    if (passwordValue === "12345") {
      nav(`/create`);
      setModal(false);
      setPasswordValue("");
    } else {
      alert(404);
    }
  };

  const searchProduct = (e) => {
    dispatch({ type: "SEARCH_PRODUCT", payload: inputValue });
    nav(`/search`);
  };

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <Link to={"/"}>
            <img src={logo} alt="" />
          </Link>
          <div className="header--search">
            <input
              onChange={(e) => setInputValue(e.target.value)}
              onInput={(e) => searchProduct(e)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  searchProduct(e);
                  nav(`/search`);
                  setInputValue("");
                }
              }}
              value={inputValue}
              type="text"
              placeholder="Я ищу"
            />
            <a href="" onClick={() => searchProduct()}>
              <IoSearchOutline />
            </a>
          </div>
          <div className="header--icons">
            <a className="" onClick={() => nav(`/basket`)}>
              <BsFillCartPlusFill />
            </a>
            <a onClick={() => setModal(true)} className="">
              <FaUserTie />
            </a>
            <div className="header--icons__dark">
              <button className="header--icons__dark--left">
                <MdDarkMode />
              </button>
              <button className="header--icons__dark--right">
                <MdLightMode />
              </button>
            </div>
          </div>
        </div>
        {modal ? (
          <div className="modal">
            <div className="">
              <input
                onChange={(e) => setPasswordValue(e.target.value)}
                value={passwordValue}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    checkPassword();
                  }
                }}
                type={typeInput ? "text" : "password"}
                placeholder="Password"
              />
              <a onClick={() => setTypeInput(!typeInput)} className="eyes ">
                {!typeInput ? <IoEyeSharp /> : <BsEyeSlashFill />}
              </a>
            </div>
            <button onClick={() => checkPassword()}>Sing In</button>
            <a onClick={() => setModal(false)} className="">
              <IoMdCloseCircleOutline />
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Header;
