import React from "react";
import { CSSTransition } from "react-transition-group";
import classes from "./TitleLogo.module.css";
import fadeTransition from "./transitions/fade.module.css";

const TitleLogo = ({ logo }) => {
  return (
    <CSSTransition
      in={logo}
      timeout={500}
      classNames={fadeTransition}
      unmountOnExit
    >
      <h1 className={classes.title}>Phonebook</h1>
    </CSSTransition>
  );
};

export default TitleLogo;
