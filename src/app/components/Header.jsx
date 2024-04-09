"use client";
import React, { useState, useEffect } from "react";

const Header = ({ contact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const HandleSubmit = (e) => {
    e.preventDefault();
    // console.log(contact);
    if (!email || !name) {
      alert("Please fill all the fields");
    } else {
      const newContacts = {
        id: Date.now().toString(),
        name,
        email,
      };
      contact(newContacts);
      setName("");
      setEmail("");
    }
  };
  return (
    <div className="min-h-screen bg-base-100 flex flex-col justify-center text-center">
      <h1 className="text-5xl"> Add Contacts</h1>
      <form onSubmit={HandleSubmit}>
        <label className="input input-bordered flex items-center gap-2 text-center w-2/6 m-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 m-5 w-2/6  justify-center text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit" className="btn btn-outline btn-accent">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default Header;
