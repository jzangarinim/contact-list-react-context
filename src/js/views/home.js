import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
  <div className="text-center mt-5">
    <h1>Hello Rigo!</h1>
    <p>
      <img src={rigoImage} />
    </p>
    <Link href="#" className="btn btn-success">
      If you see this green button, bootstrap is working
    </Link>
  </div>
);
