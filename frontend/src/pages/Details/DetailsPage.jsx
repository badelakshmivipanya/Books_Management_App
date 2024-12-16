import React from "react";
import { useParams } from "react-router-dom";
import "./DetailsPage.css";

const DetailsPage = () => {
  const { id } = useParams();

  const book = {
    id,
    title: "Book Title",
    author: "Author Name",
    genre: "Fiction",
    pages: 300,
    publishedDate: "2024-01-01",
  };

  return (
    <div className="details-page">
      <h1>{book.title}</h1>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Pages:</strong> {book.pages}</p>
      <p><strong>Published Date:</strong> {book.publishedDate}</p>
    </div>
  );
};

export default DetailsPage;
