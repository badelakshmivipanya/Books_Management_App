import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import SearchResultsPage from "./pages/SearchResults/SearchResultsPage";
import DetailsPage from "./pages/Details/DetailsPage";
import ManageBookPage from "./pages/ManageBook/ManageBookPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/add-book" element={<ManageBookPage />} />
        <Route path="/edit-book/:id" element={<ManageBookPage />} />
      </Routes>
    </Router>
  );
};

export default App;
