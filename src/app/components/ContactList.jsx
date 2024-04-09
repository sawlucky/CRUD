"use client";
import React from "react";
import Contactcards from "./Contactcards";
const ContactList = ({ list, getId }) => {
  //   console.log(getId);
  const display = (list) => {
    return list.map((item) => {
      return <Contactcards datas={item} getId={getId} />;
    });
  };
  return (
    <div>
      <div>{display(list)}</div>
    </div>
  );
};

export default ContactList;
