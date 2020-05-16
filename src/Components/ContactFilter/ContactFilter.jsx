import React from "react";
import PropTypes from "prop-types";
import { Input, Lable, Container } from "./ContactFilter.styles";

const ContactFilter = ({ value, changeFilter }) => {
  return (
    <Container>
      <Lable htmlFor="name">
        Find contact by name
        <Input type="text" value={value} onChange={changeFilter} />
      </Lable>
    </Container>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
export default ContactFilter;
