import React from "react";
import PropTypes from "prop-types";
import { Item, Text, Button, Container } from "./ContactItem.styles";
import buttonCloce from "../../helpers/icon/icons-delete-button.png";
const ContactItem = ({ contact, deleteContact }) => {
  const { name, number } = contact;
  return (
    <Container>
      <Item>
        <Text>{name}</Text>
        <Text> {number}</Text>
        <Button src={buttonCloce} onClick={deleteContact}></Button>
      </Item>
    </Container>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  deleteContact: PropTypes.func,
};

export default ContactItem;
