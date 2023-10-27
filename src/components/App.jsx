import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
import { filterSelector } from 'redux/filter/filterSlice';
import { useGetContactsQuery } from "redux/contacts/contactsSlice";
import { ThreeDots } from 'react-loader-spinner';
import { Toaster } from 'react-hot-toast';


export const App = () => {

  const filterValue = useSelector(filterSelector).value;
  const { data: contacts, isLoading } = useGetContactsQuery();

    
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'top',
        alignItems: 'flex-start',
        marginLeft:'50px',
        fontSize: 18,
        color: '#010101'
      }}
      >
        <div><Toaster/></div>
        <h2>Phonebook</h2>
        <ContactForm contacts={contacts}/>

        <h2>Contacts</h2>

        <Filter
          value={filterValue}
        />
        
        {isLoading ? (
        <ThreeDots/>
      ) : (
        <ContactList contacts={contacts} />
      )}


        

      </div>
    );
  };
