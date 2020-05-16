const findContact = (contacts, contact) => {
  return contacts.find((el) => el.name === contact.name);
};

export default findContact;
