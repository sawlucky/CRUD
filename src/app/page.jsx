"use client";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ContactList from "./components/ContactList";
const page = () => {
  const [contacts, setContacts] = useState([
    // {
    //   id: 1,
    //   name: "shah",
    //   email: "shah@gmail.com",
    // },
    // {
    //   id: 2,
    //   name: "nono",
    //   email: "nono@gmail.com",
    // },
  ]);
  const addContact = (newContacts) => {
    setContacts([...contacts, newContacts]);
  };
  const removeHandler = (id) => {
    console.log(id);
    const newArr = [...contacts];
    newArr.splice(id, 1);
    // const newList = contacts.filter((contacts) => contacts.id !== id);
    setContacts(newArr);
  };
    useEffect(() => {
      localStorage.setItem("contact", JSON.stringify(contacts));
    }, [contacts]);
  //  localStorage.setItem("contact", JSON.stringify(contacts));

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("contact"));
    if (data) {
      setContacts(data);
    }
  }, []);
  return (
    <>
      <div>
        <Header contact={addContact} />
        <ContactList list={contacts} getId={removeHandler} />
      </div>
    </>
  );
};

export default page;
