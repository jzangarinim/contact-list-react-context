import React from "react";
import { Link } from "react-router-dom";

const AddContact = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1>Add a new contact</h1>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              type="email"
              className="form-control"
              id="nameInput"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneInput" className="form-label">
              Phone number
            </label>
            <input
              type="email"
              className="form-control"
              id="phoneInput"
              placeholder="000-000-0000"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="addressInput" className="form-label">
              Address
            </label>
            <input
              type="email"
              className="form-control"
              id="addressInput"
              placeholder="Maracaibo, Zulia, VE"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-end">
          <button type="button" className="col-2 btn btn-primary">
            Add contact
          </button>
          <button type="button" className="col-2 btn btn-success ms-3 me-2">
            <Link to="/">Go back to contact list</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddContact;
