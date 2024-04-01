import { useState } from "react";

const ContactAdder = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = { name, number, location };
    if (name.length < 1 || number.length < 1 || location.length < 1) {
      alert("Please fill all the fields!");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setNumber("");
      setLocation("");
    }
  };
  return (
    <>
      <div className="simpleAdder">
        <h3>Contact Adder:</h3>
        <br />
        <form onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            value={name}
            placeholder="Contact Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <br />
          <input
            type="text"
            value={number}
            placeholder="Number"
            onChange={(e) => setNumber(e.target.value)}
          ></input>
          <br />
          <input
            type="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br /> <button>Add Contacts</button>
        </form>
      </div>
    </>
  );
};

export default ContactAdder;
