import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ManageBookPage.css";

const ManageBookPage = () => {
  const { id } = useParams();
  const isEdit = !!id;
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: isEdit ? "Existing Book Title" : "",
    author: isEdit ? "Existing Author" : "",
    genre: isEdit ? "Existing Genre" : "",
    pages: isEdit ? 300 : "",
    publishedDate: isEdit ? "2024-01-01" : "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      console.log("Edited Book:", form);
    } else {
      console.log("New Book Added:", form);
    }
    navigate("/");
  };

  return (
    <div className="manage-book-page">
      <h1>{isEdit ? "Edit Book" : "Add Book"}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={form.title}
          placeholder="Title"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          value={form.author}
          placeholder="Author"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="genre"
          value={form.genre}
          placeholder="Genre"
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="pages"
          value={form.pages}
          placeholder="Pages"
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="publishedDate"
          value={form.publishedDate}
          onChange={handleChange}
          required
        />
        <button type="submit">{isEdit ? "Save Changes" : "Add Book"}</button>
      </form>
    </div>
  );
};

export default ManageBookPage;
