import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search-results");
  };

  return (
    
    <div className="home-page">
      
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
        <a href="/add-book">Add Book</a>
      </nav>

      <div className="search-section">
        <h1>Welcome to the Book Store</h1>
        <div className="filters">
          <input type="text" placeholder="Search by title, author, or genre..." />
          <button onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
    
  );
};

export default HomePage;
