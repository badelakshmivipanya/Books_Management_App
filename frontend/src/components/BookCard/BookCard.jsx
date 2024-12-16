import React from "react";
import "./BookCard.css";

const BookCard = ({ book, onView, onEdit, onDelete }) => {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <div className="actions">
        <button onClick={() => onView(book)}>View</button>
        <button onClick={() => onEdit(book)}>Edit</button>
        <button onClick={() => onDelete(book)}>Delete</button>
      </div>
    </div>
  );
};

export default BookCard;
