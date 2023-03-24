/** @format */

import { useContext } from "react";
import {
  Container, Row, Col, Form, Input, Button, Navbar, Nav,
  NavbarBrand, NavLink, NavItem, UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem,Card, CardImg, CardBody,
  CardTitle, CardSubtitle, CardText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cartcontext } from "../../context/Context";
import "./Cart.css";


const Cart = () => {
  
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);
  return (
    <>
    <div className="cart">
   
      {state.map((item, index) => {
        return (
          <div className="card" key={index}>
            <img src={item.image} alt="" />
            <p>{item.title}</p>
            <p>{item.quantity * item.price}</p>
            <div className="quantity">
              <Button
                onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                +
              </Button>
              <p>{item.quantity}</p>
              <Button
                onClick={() => {
                  if (item.quantity > 1) {
                    dispatch({ type: "DECREASE", payload: item });
                  } else {
                    dispatch({ type: "REMOVE", payload: item });
                  }
                }}>
                -
              </Button>
            </div>
            <h2 onClick={() => dispatch({ type: "REMOVE", payload: item })}>
              x
            </h2>
          </div>
        );
      })}
      {state.length > 0 && (
        <div className="total">
       
          <h2>Total:{total}
          
          </h2>
          <Button onClick={() => dispatch({ type: "CHECKOUT"  })}>
             GO TO CHECKOUT
            </Button>
        </div>
      )}
    </div>
 
</>
  );
};

export default Cart;
