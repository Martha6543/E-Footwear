import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { NavLink } from 'react-router-dom';

import 'bulma/css/bulma.min.css';


function Header() {
  return (
    <header>
  
    <nav className="navbar">
      <a href="/" className="nav-link">Home</a>
      <div className="dropdown">
<select className="category-select" onChange={(e) => { window.location.href = e.target.value }}>
  <option value="">Categories</option>
  <option value="/running">Running</option>
  <option value="/climbing">Climbing</option>
  <option value="/football">Football</option>
  <option value="/tennis">Tennis</option>
  <option value="/hiking">Hiking</option>
</select>

</div>
      <a href="/product" className="nav-link">Shop</a>
      <a href="/account" className="nav-link">Account</a>
      <a href=" /newUser" className="nav-link">Admin</a>
              <li> <NavLink to="/cart">Cart</NavLink></li>
      <a href="/cart" className="nav-link">Cart</a>
      <a href="/about" className="nav-link">About Us</a>
      <a href="/contact" className="nav-link">Contact Us</a>
      <a href="/cart" className="nav-link"><i className="fas fa-shopping-cart"></i></a>
      <a href="/account" className="nav-link"><i className="fas fa-user"></i></a>
     
   <div className="input-container">
<input type="text" name="text" className="input" placeholder="search..."/>
<span className="icon"> 
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path opacity="1" d="M14 5H20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
  <path opacity="1" d="M14 8H17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
  <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2" stroke="#000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
  <path opacity="1" d="M22 22L20 20" stroke="#000" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</span>
</div>
    </nav>
   

    <div className="slider">
      <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true} >
              <div>
                <img src="https://via.placeholder.com/5000x250" alt="Slider" />
              </div>
              <div>
                <img src="https://via.placeholder.com/5000x250" alt="Slider" />
              </div>
              <div>
                <img src="https://via.placeholder.com/5000x250" alt="Slider" />
              </div>
      </Slider>

    </div>
  </header>

            
            
  );
};

export default Header;
