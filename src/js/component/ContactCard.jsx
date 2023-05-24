import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { store, actions } = useContext(Context);
  const { imgUrl } = store.demo;

  function handleDeleteUser() {
    actions.deleteUser(props.id);
  }

  return (
    <>
      <div className="col-5 border border-light rounded m-auto d-flex">
        <div className="picture col-3 d-flex justify-content-center align-items-center">
          <img className="rounded-circle h-75 w-75" src={imgUrl} />
        </div>
        <div className="info col-6">
          <div className="mt-3">
            <p>{props.name ? props.name : "Name"}</p>
          </div>
          <div className="d-flex">
            <i className="fa-solid fa-location-dot me-3 fs-5"></i>
            <p>{props.address ? props.address : "Address"}</p>
          </div>
          <div className="d-flex">
            <i className="fa-solid fa-phone me-3 fs-5"></i>
            <p>{props.phone ? props.phone : "Phone"}</p>
          </div>
          <div className="d-flex">
            <i className="fa-solid fa-envelope me-3 fs-5"></i>
            <p>{props.email ? props.email : "Email"}</p>
          </div>
        </div>
        <div className="buttons col-3 d-flex justify-content-end mt-3">
          <Link
            to="/AddContact"
            state={{
              edit: true,
              id: props.id,
              name: props.name,
              address: props.address,
              phone: props.phone,
              email: props.email,
            }}
            style={{ height: 20 + "px" }}
          >
            <i
              className="functions fa-solid fa-pen-to-square me-3 fs-5"
              type="button"
            ></i>
          </Link>
          <i
            className="functions fa-solid fa-trash me-3 fs-5 text-danger"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#deleteModal"
            onClick={handleDeleteUser}
          ></i>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
