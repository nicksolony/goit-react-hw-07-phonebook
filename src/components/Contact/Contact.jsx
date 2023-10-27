import React from "react";
import { ContactItem } from './Contact.styled';
// import { useDispatch } from "react-redux";
// import { deleteContact } from "redux/contacts/contactsSlice";
import { useDeleteContactMutation } from "redux/contacts/contactsSlice";

export const Contact = ({ contact }) => {
    let { id, name, phone } = contact;
    // const dispatch = useDispatch();
    const [deleteContact, { isLoading }] = useDeleteContactMutation();


    return (
        <ContactItem key={id}>

            {name}: {phone}

            <button onClick={()=>(deleteContact(id))} disabled={isLoading}>
                Delete
            </button>
        </ContactItem>
    );
};