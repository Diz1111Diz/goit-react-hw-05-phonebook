import React from "react";
import PropTypes from "prop-types";

import { List } from "./ContactList.styles";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    contacts.length > 0 && (
      <List>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={() => deleteContact(contact.id)}
          ></ContactItem>
        ))}
      </List>
    )
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
