import React, { useState } from "react";
import { FaFileDownload } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const AdminCreate = () => {
  const [productUrl, setProductUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [productDes, setProductDes] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [categoryPro, setCategoryPro] = useState("");
  const { product } = useSelector((s) => s.create);
  console.log(product, "product");
  const dispatch = useDispatch();
  const onChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => setProductUrl(reader.result);
    reader.readAsDataURL(file);
  };
  const createProduct = () => {
    if (
      productDes.trim() === "" ||
      productName.trim() === "" ||
      productPrice.trim() === ""
    ) {
      alert(404);
    } else {
      let newProduct = {
        id: product.length ? product[product.length - 1].id + 1 : 1,
        quantity: 1,
        img: productUrl,
        title: productName,
        description: productDes,
        price: productPrice,
        category: categoryPro,
      };
      dispatch({ type: "CREATE_PRODUCT", payload: newProduct });
      setProductDes("");
      setProductName("");
      setProductPrice("");
    }
  };

  return (
    <div id="create">
      <div className="container">
        <div className="create">
          <div className="input__wrapper">
            <input
              name="file"
              type="file"
              id="input__file"
              className="input input__file"
              multiple
              onChange={onChange}
            />
            <label htmlFor="input__file" className="input__file-button">
              <span className="input__file-icon-wrapper">
                <a
                  href=""
                  style={{
                    fontSize: "30px",
                  }}
                >
                  <FaFileDownload />
                </a>
              </span>
              <span className="input__file-button-text">Выберите файл</span>
            </label>
          </div>

          <select onChange={(e) => setCategoryPro(e.target.value)}>
            <option value="Food">Food</option>
            <option value="Завтрак">Завтрак</option>
            <option value="Суши">Суши</option>
            <option value="Суп">Суп</option>
            <option value="Пицца">Пицца</option>
            <option value="Салаты">Салаты</option>
            <option value="Десерты">Десерты</option>
            <option value="Холодные напитки">Холодные напитки</option>
            <option value="Кофе">Кофе</option>
            <option value="Чай">Чай</option>
          </select>

          <input
            type="text"
            placeholder="Product Name"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
          <input
            type="text"
            placeholder="Product Description"
            onChange={(e) => setProductDes(e.target.value)}
            value={productDes}
          />
          <input
            type="text"
            placeholder="Product Price"
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />
          <button onClick={() => createProduct()}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default AdminCreate;
