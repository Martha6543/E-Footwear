/** @format */

import "./App.css";
//import "./Home.css";
import { Routes, Route } from "react-router-dom";
import Product from "./pages/Product/Product.js";
import Climbing from "./pages/Climbing/Climbing.js";
import Running from "./pages/Running/Running.js";
import Football from "./pages/Football/Football.js";
import Tennis from "./pages/Tennis/Tennis.js";
import Hiking from "./pages/Hiking/Hiking.js";
import Cart from "./pages/cart/Cart";
import Home from "./pages/Home/Home.js";
import Account from "./pages/Account/Account.js";
import Contact from "./pages/Contact/Contact.js";
import Header from "./components/navbar/Header";
import Footer from "./components/footer/Footer";
import About from "./pages/About/About.js";
import Sidebar from "./components/sidebar/Sidebar";

import "./App.css";
import Homes from "./pages/homes/Homes";

import UserList from "./pages/userList/UserList";
import User from "./pages/Admin/user/User";
import NewUser from "./pages/Admin/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Products from "./pages/Products/Products";
import NewProduct from "./pages/Admin/newProduct/NewProduct";


function App() {
  return (
    <div className="App">
      <Header />
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/running" element={<Running />} />
      <Route path="/climbing" element={<Climbing />} />
      <Route path="/football" element={<Football />} />
      <Route path="/tennis" element={<Tennis />} />
      <Route path="/hiking" element={<Hiking />} />
      <Route path="/account" element={<Account />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        
        <Route exact path="/admin" element={<Homes/>} />
        <Route exact path="/users"element={<UserList />} />
          <Route exact path="/user/:userId" element={<User />} />
          <Route exact path="/newUser"element={<NewUser />} />
          <Route exact path="/products"element={<ProductList />} />
          <Route exact path="/product/:productId"element={<Products />} />
          <Route exact path="/newproduct"element={ <NewProduct />} />




      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
