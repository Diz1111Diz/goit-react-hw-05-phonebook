import React from "react";
import PropTypes from "prop-types";
import { Text, Button } from "./ContactItem.styles";
import iconClose from "../../helpers/icon/Delete_icon.svg";
const ContactItem = ({ contact, deleteContact }) => {
  const { name, number } = contact;

  return (
    <>
      <Text>{name}</Text>
      <Text> {number}</Text>
      <Button src={iconClose} onClick={deleteContact}></Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default ContactItem;
