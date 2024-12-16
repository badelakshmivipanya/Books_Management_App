import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchResultsPage.css";

const books = [
  { id: 1, title: "Book 1", author: "Author 1", genre: "Fiction" },
  { id: 2, title: "Book 2", author: "Author 2", genre: "Fantasy" },
];

const SearchResultsPage = () => {
  const navigate = useNavigate();

  const handleView = (id) => {
    navigate(`/details/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/edit-book/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      console.log("Book deleted:", id);
    }
  };

  return (
    <div className="search-results">
      <h1>Search Results</h1>
      <div className="book-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Genre: {book.genre}</p>
            <button onClick={() => handleView(book.id)}>View</button>
            <button onClick={() => handleEdit(book.id)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResultsPage;
