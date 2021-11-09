import React from "react";
import { MdModeEditOutline }from 'react-icons/md';
import { MdDelete } from "react-icons/md";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.date}</td>
      <td>{contact.type}</td>
      <td>{contact.classification}</td>
      <td>{contact.description}</td>
      <td>{contact.value}</td>
      <td>
        <MdModeEditOutline onClick={(event) => handleEditClick(event, contact)} size={25}/>
        <MdDelete onClick={() => handleDeleteClick(contact.id)} size={25}/>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;