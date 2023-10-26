import React from "react";
import { ContactItem } from './Contact.styled';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contactsSlice";

export const Contact = ({ contact }) => {
    let { id, name, number } = contact;
    
    const dispatch = useDispatch();


    return (
        <ContactItem key={id}>
            {name}: {number}
            <button onClick={()=>dispatch(deleteContact(id))}>
                Delete
            </button>
        </ContactItem>
    );
};