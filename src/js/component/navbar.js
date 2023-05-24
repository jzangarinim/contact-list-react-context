import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1 ms-2">Contact List</span>
      </Link>
      <div className="ml-auto">
        <Link to="/AddContact" state={{ edit: false }}>
          <button className="btn btn-success me-2">Add a contact</button>
        </Link>
      </div>
    </nav>
  );
};
