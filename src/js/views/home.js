import React, { useContext } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Home = () => {
  const { actions, store } = useContext(Context);
  const { name, location, phoneNumber, email, imgUrl } = store.demo;
  return (
    <>
      <div className="col-8 border border-light rounded m-auto d-flex">
        <div className="picture col-3 d-flex justify-content-center align-items-center">
          <img className="rounded-circle h-75 w-75" src={imgUrl} />
        </div>
        <div className="info col-6">
          <div className="mt-3">
            <p>{name}</p>
          </div>
          <div className="d-flex">
            <i className="fa-solid fa-location-dot me-3 fs-5"></i>
            <p>{location}</p>
          </div>
          <div className="d-flex">
            <i className="fa-solid fa-phone me-3 fs-5"></i>
            <p>{phoneNumber}</p>
          </div>
          <div className="d-flex">
            <i className="fa-solid fa-envelope me-3 fs-5"></i>
            <p>{email}</p>
          </div>
        </div>
        <div className="buttons col-3 d-flex justify-content-end mt-3">
          <i className="fa-solid fa-pen-to-square me-3 fs-5"></i>
          <i className="fa-solid fa-trash me-3 fs-5 text-danger"></i>
        </div>
      </div>
    </>
  );
};
