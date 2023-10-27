import React from "react";
import { List } from './ContactList.sytyled';
import { Contact } from "components/Contact/Contact";
import { useSelector } from 'react-redux';
// import { contactsSelector } from 'redux/contacts/contactsSlice';
import { filterSelector } from 'redux/filter/filterSlice';
import { useGetContactsQuery } from "redux/contacts/contactsSlice";

export const ContactList = () => {
  // const contacts = useSelector(contactsSelector).contacts;
  const { data: contacts, error, isFetching } = useGetContactsQuery();

  const filterValue = useSelector(filterSelector).value;
  const filterContacts = () => {
  
    let normalizedFilter = filterValue.toLowerCase();  
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  let filteredContacts = filterContacts();

  
  

    return (
        <List>
          {filteredContacts.map((contact) =>
            {return (
              <Contact key={contact.id} contact={contact} />
            )}
          )}
        </List>
    );
};
