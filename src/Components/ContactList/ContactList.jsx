import React from "react";
import PropTypes from "prop-types";

import { List, Item } from "./ContactList.styles";
import ContactItem from "../ContactItem/ContactItem";
import { TransitionGroup } from "react-transition-group";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <TransitionGroup component={List}>
      {contacts.map((contact) => (
        <Item key={contact.id}>
          <ContactItem
            contact={contact}
            deleteContact={() => deleteContact(contact.id)}
          ></ContactItem>
        </Item>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  deleteContact: PropTypes.func,
};

export default ContactList;
