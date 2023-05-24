import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/appContext.js";

const AddContact = () => {
  const location = useLocation();
  const { edit, id, name, address, phone, email } = location.state;
  const { actions } = useContext(Context);

  function handleDecide() {
    let nameInput = document.getElementById("nameInput");
    let emailInput = document.getElementById("emailInput");
    let phoneInput = document.getElementById("phoneInput");
    let addressInput = document.getElementById("addressInput");
    if (edit == false) {
      actions.createUser(
        nameInput.value,
        emailInput.value,
        phoneInput.value,
        addressInput.value
      );
    } else if (edit == true) {
      actions.editUser(
        nameInput.value,
        emailInput.value,
        phoneInput.value,
        addressInput.value,
        id
      );
    }
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
              defaultValue={name ? name : ""}
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
              defaultValue={email ? email : ""}
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
              defaultValue={phone ? phone : ""}
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
              defaultValue={address ? address : ""}
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
            onClick={handleDecide}
          >
            {edit == false ? "Add contact" : "Edit contact"}
          </button>
        </div>
      </div>
    </>
  );
};

export default AddContact;
