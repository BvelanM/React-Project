import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
     <>
     <div class="nav" >
       <div class="container">
         <h1 class="logo"><a href="../HTML/Home.html">BADAD</a></h1>
        <ul>
          <li><a href="Home.html">Home</a></li>
          <li><a href="../HTML/uc.html">Store</a></li>
          <li><a href="#">Channel</a></li>
          <li><a href="#">Categories</a></li>
         </ul>
       </div>
       <div class="custom-search">
        <input placeholder="Search" id="typeahead" type="text" />
         <button class="search-btn" type="submit"></button>
      </div>
      <div class="profile-pic">
               <Link to="../HTML/New Login stream.html"> 
       <img src={require("../Media/profile.png")} />
       </Link></div>
       </div>
    </>
  );
};
export default Nav;
