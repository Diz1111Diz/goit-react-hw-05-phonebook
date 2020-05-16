import React, { useState, useEffect } from "react";

import ContactForm from "./Components/ContactForm/ContactForm";
import ContactList from "./Components/ContactList/ContactList";
//Helpers
import filterContact from "./helpers/filterContact";
import ContactFilter from "./Components/ContactFilter/ContactFilter";
import storage from "./helpers/storage";
//toast
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const notify = (warn) =>
    toast.error(`Contact ${warn} is too short!`, {
      position: toast.POSITION.TOP_CENTER,
    });

  const addNewContact = (contact) => {
    if (contact.name.length > 2 && contact.number.length > 2) {
      setContacts([...contacts, contact]);
    } else if (contact.name.length <= 1) {
      notify("name");
    } else if (contact.number.length <= 1) {
      notify("number");
    }
  };

  const deleteContact = (id) => {
    const newState = contacts.filter((contact) => contact.id !== id);
    setContacts(newState);
  };

  const changeFilter = (e) => {
    const name = e.target.value;
    setFilter(name);
  };
  const filteredContact = filterContact(contacts, filter);

  useEffect(() => {
    const arrContacts = storage.get("contacts");
    if (!arrContacts) {
      storage.save("contacts", []);
      return;
    }
    setContacts(arrContacts);
  }, []);

  useEffect(() => {
    storage.save("contacts", contacts);
  }, [contacts]);

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm addNewContact={addNewContact} contacts={contacts} />
      {contacts.length > 1 && (
        <ContactFilter value={filter} changeFilter={changeFilter} />
      )}

      <ContactList contacts={filteredContact} deleteContact={deleteContact} />
    </div>
  );
}

export default App;
