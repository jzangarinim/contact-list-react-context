import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext.js";
import ContactCard from "../component/ContactCard.jsx";

export const Home = () => {
  const { store } = useContext(Context);
  document.title = "Contact list";
  return (
    <>
      {store.users.map((user, index) => {
        return (
          <ContactCard
            key={index}
            name={user.full_name}
            phone={user.phone}
            id={user.id}
            email={user.email}
            address={user.address}
          />
        );
      })}
    </>
  );
};
