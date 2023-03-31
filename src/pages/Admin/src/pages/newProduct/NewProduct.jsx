import "./newProduct.css";
import { useState } from "react";
import axios from "axios";

export default function NewProduct() {

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState("");
  const [active, setActive] = useState(true);
  const handleClick = async(e) => {
    e.preventDefault()
    await axios.post("http://localhost:3001/addproduct", {
    image,name,stock,active,price: Number(price)
    })
  };

  return (
    <div className="newProduct">
      <h3 className="addProductTitle">Create a New Product</h3>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="text" value = {image} id="image" onChange={e => setImage(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input type="text" value= {name} placeholder="Nike" onChange={e => setName(e.target.value)} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" value = {stock} placeholder="45" onChange={e => setStock(Number(e.target.value))}  />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="text" value = {price} placeholder="99.99" onChange={e => setPrice(e.target.value)}  />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" value = {active} id="active" onChange={e => setActive(e.target.value === "true" ? true : false)} >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="addProductButton" onClick={handleClick}>Create</button>
      </form>
    </div>
  );
}