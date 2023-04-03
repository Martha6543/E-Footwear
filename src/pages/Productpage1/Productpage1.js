/** @format */

import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
//import ProductPage1 from '../ProductPages/Hiking/ProductPage1';
import { useContext, useEffect, useState } from "react";
import "./Productpage.css";
import axios from "axios";
import { Cartcontext } from "../../context/Context";
import { useParams, useNavigate } from "react-router-dom";



const Product = () => {
  const { itemId } = useParams()
  const [data, setdata] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(`/api/getdata/${itemId}`);
    setdata(response.data);
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
      {data.map((response, index) => {
        response.quantity = 1;
        return (
          <div className="container" key={response.id}>
         <div className="row">
          <div className="card">
          <a href="{/productpage1}"> <img src={response.image}  className="img-thumbnail rounded" /></a>
            <p>{response.title}</p>
            <p>{response.desc}</p>
            <p>{response.category}</p>
            <p className="lead mb-4">Price: £{response.price}</p>
            <button className="btn btn-primary mb-4" onClick={() => dispatch({ type: "ADD", payload: response })}>
              add to cart
            </button>
            
          </div>
          </div>
          
          </div>
          
        );
      })}
      
    </div>
  );
};

export default Product;
