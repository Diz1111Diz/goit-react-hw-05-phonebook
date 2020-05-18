import React, { useState } from "react";
import PropTypes from "prop-types";
import { v1 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import findContact from "../../helpers/findContact";
import { Lable, Input, Button, Form, Container } from "./ContactForm.styles";
toast.configure();

const formInitialState = {
  name: "",
  number: "",
};

const ContactForm = ({ addNewContact, contacts }) => {
  const [form, setForm] = useState(formInitialState);

  const notify = (name) =>
    toast.error(`${name} is already in contacts`, {
      position: toast.POSITION.TOP_CENTER,
    });

  const inputHandler = (e) => {
    const name = e.target.name;
    let value = "";
    if (name === "name") {
      value = e.target.value.replace(/[^A-zА-яЁё\s]+/gi, "");
    }
    if (name === "number") {
      value = e.target.value.replace(/[^\d\s,+,(,),-]+/gi, "");
    }

    setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, number } = form;
    const contact = {
      name,
      number,
      id: uuidv4(),
    };

    const findSimilarName = findContact(contacts, contact);
    if (findSimilarName) {
      notify(contact.name);
      return;
    }
    addNewContact(contact);
    setForm(formInitialState);
  };

  const { name, number } = form;

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Lable htmlFor="name">
          Name
          <Input
            name="name"
            type="text"
            value={name}
            onChange={inputHandler}
            autoFocus
          />
        </Lable>

        <Lable htmlFor="number">
          Number
          <Input
            name="number"
            type="text"
            value={number}
            onChange={inputHandler}
          />
        </Lable>

        <Button type="submit" disabled={!name || !number}>
          Add contact
        </Button>
      </Form>
    </Container>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
  addNewContact: PropTypes.func.isRequired,
  contacts: PropTypes.array.isRequired,
};

export default ContactForm;
