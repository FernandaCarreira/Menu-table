import React, { useState, Fragment } from "react";
import '../components/Navbar.css';
import { nanoid } from "nanoid";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";
import './Home.css'

const CashFlow = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    date: "",
    type: "",
    classification: "",
    description: "",
    value: "",
  });

  const [editFormData, setEditFormData] = useState({
    date: "",
    type: "",
    classification: "",
    description: "",
    value: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      date: addFormData.date,
      type: addFormData.type,
      classification: addFormData.classification,
      description: addFormData.description,
      value: addFormData.value,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      date: editFormData.date,
      type: editFormData.type,
      classification: editFormData.classification,
      description: editFormData.description,
      value: editFormData.value,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      date: contact.date,
      type: contact.type,
      classification: contact.classification,
      description: contact.description,
      value: contact.value,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Tipo</th>
              <th>Classificação</th>
              <th>Descrição</th>
              <th>Valor</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="date"
          name="date"
          required="required"
          placeholder="Data"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="type"
          required="required"
          placeholder="Tipo"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="classification"
          required="required"
          placeholder="Classificação"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="description"
          required="required"
          placeholder="Descrição"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="value"
          required="required"
          placeholder="Valor"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CashFlow;