import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

const ContactCard = (props) => {
  const { store, actions } = useContext(Context);
  const { name, location, phoneNumber, email, imgUrl } = store.demo;

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
            <p>{props.name ? props.name : "Hi"}</p>
          </div>
          <div className="d-flex">
            <i className="fa-solid fa-location-dot me-3 fs-5"></i>
            <p>{props.address ? props.address : "address"}</p>
          </div>
          <div className="d-flex">
            <i className="fa-solid fa-phone me-3 fs-5"></i>
            <p>{props.phone ? props.phone : "phone"}</p>
          </div>
          <div className="d-flex">
            <i className="fa-solid fa-envelope me-3 fs-5"></i>
            <p>{props.email ? props.email : "email"}</p>
          </div>
        </div>
        <div className="buttons col-3 d-flex justify-content-end mt-3">
          <i
            className="functions fa-solid fa-pen-to-square me-3 fs-5"
            type="button"
          ></i>
          <i
            className="functions fa-solid fa-trash me-3 fs-5 text-danger"
            type="button"
            onClick={handleDeleteUser}
          ></i>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
