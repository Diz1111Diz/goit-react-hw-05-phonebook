import React from "react";
import PropTypes from "prop-types";
import { Input, Lable, Container } from "./ContactFilter.styles";
import fadeTransition from "./transitions/fade.module.css";
import { CSSTransition } from "react-transition-group";
const ContactFilter = ({ value, changeFilter, showFilter }) => {
  return (
    <CSSTransition
      in={showFilter}
      timeout={250}
      classNames={fadeTransition}
      unmountOnExit
    >
      <Container>
        <Lable htmlFor="name">
          Find contact by name
          <Input type="text" value={value} onChange={changeFilter} />
        </Lable>
      </Container>
    </CSSTransition>
  );
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
export default ContactFilter;
