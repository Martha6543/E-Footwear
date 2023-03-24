/** @format */
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


import { useContext, useEffect, useState } from "react";
import "./Product.css";
import axios from "axios";
import { Cartcontext } from "../../context/Context";
//import  Button  from 'react-bootstrap/Button';


const Product = () => {
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/getdataall");
    setdata(response.data);
    console.log(data);
  };
  useEffect(() => {
    
    fetchData();
     // eslint-disable-next-line 
  }, []);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;
  console.log(Globalstate);
  return (

    <div className="home">
      {data.map((item, index) => {
        item.quantity = 1;
        return (
          <div className="card" key={index}>
            <img src={item.image.toString('base64')} alt="" />
         <p>{item.title}</p>
            <p>{item.descr}</p>
            <p>{item.catagory}</p>
            <h3>$.{item.price}</h3>
  
            <button onClick={() => dispatch({ type: "ADD", payload: item })}>
              add to cart
            </button>
          
          </div>
        );
      })}
      
    </div>
    
 
  );
};



export default Product;
