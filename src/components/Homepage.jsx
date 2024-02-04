import React, { useState, useEffect } from "react";
import DisplayCard from "./DisplayCard";
import "../components/Homepage.css";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "./Navbar";



function Homepage() {


  return (
    <div className="body">
      <Navbar/>

      <section className="main">
        <div className="heading-text">
          <h3>Social Media For Travellers</h3>
        </div>

        <div className="input-container">
          <SearchIcon />
          <input type="text" placeholder="Search here ...." />
        </div>
      </section>

      <section className="cards">
        
          <DisplayCard/>
      
      </section>
    </div>
  );
}

export default Homepage;
