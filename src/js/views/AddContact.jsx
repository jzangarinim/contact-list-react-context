import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext.js";

const AddContact = () => {
  const location = useLocation();
  const { edit, id, name, address, phone, email } = location.state;
  const { actions } = useContext(Context);
  let nameInput = document.getElementById("nameInput");
  let emailInput = document.getElementById("emailInput");
  let phoneInput = document.getElementById("phoneInput");
  let addressInput = document.getElementById("addressInput");

  /*   nameInput?.value = name;
  emailInput?.value = email;
  phoneInput?.value = phone;
  addressInput?.value = address;  */

  function handleDecide() {
    if (edit == false) {
      handleCreateUser();
    } else {
      handleEditUser();
    }
  }

  function handleCreateUser() {
    actions.createUser(
      nameInput.value,
      emailInput.value,
      phoneInput.value,
      addressInput.value
    );
  }

  function handleEditUser() {
    console.log(name, email, phone, address);
    nameInput.value = name;
    emailInput.value = email;
    phoneInput.value = phone;
    addressInput.value = address;
    actions.editUser(
      id,
      nameInput.value,
      emailInput.value,
      phoneInput.value,
      addressInput.value
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <h1>{edit == false ? "Add a contact" : "Edit a contact"}</h1>
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              type="name"
              required
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
              required
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
              type="number"
              required
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
              required
              className="form-control"
              id="addressInput"
              placeholder="Maracaibo, Zulia, VE"
            />
          </div>
        </div>
        <div className="row d-flex justify-content-end">
          <button className="col-2 ms-3 me-2">
            <Link to="/">Go back to contact list</Link>
          </button>
          <button
            type="button"
            className="col-2 btn btn-primary me-3"
            onClick={() => handleDecide()}
          >
            {edit == false ? "Add a contact" : "Edit contact"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddContact;
