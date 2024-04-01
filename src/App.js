import React, { useState } from "react";
import Contact from "./components/Contact";
import "./styles/app.css";
import ContactAdder from "./components/ContactAdder";
import Navbar from "./components/Navbar";
const App = () => {
  /* const initialContacts = [
    { name: "John", number: " 1234", location: "Nepal" },
    { name: "Ram", number: " 2345", location: "Usa" },
    { name: "Hari", number: " 5678", location: "Australia" },
  ]; */
  const clearContacts = () => {
    localStorage.clear();
    setContacts([]);
  };
  const getContacts = JSON.parse(localStorage.getItem("contacts"));

  const [contacts, setContacts] = useState(getContacts ? getContacts : []);

  const addContactData = (contactData) => {
    const allContacts = [...contacts, contactData];
    setContacts(allContacts);
    localStorage.setItem("contacts", JSON.stringify(allContacts));
  };

  return (
    <>
      <Navbar />
      <div className="contact_adder">
        <ContactAdder onContactAdded={addContactData} />
        <button onClick={clearContacts} style={{ background: "#F80032" }}>
          Reset Contacts
        </button>
      </div>
      <div className="contact_list">
        <h3>Contact List:</h3>
        {contacts.map((data) => (
          <Contact key={data.id} data={data}></Contact>
        ))}{" "}
        // Contacts vanney array map vayo ani tyo 1 data chai ekchoti ma (data)
        // vanne ma aayera basyo ani tei data contact bata display gareko
      </div>
    </>
  );
};

export default App;
