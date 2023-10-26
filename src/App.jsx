import React from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { useSelector } from 'react-redux';
// import { contactsSelector } from 'redux/contacts/contactsSlice';
import { filterSelector } from 'redux/filter/filterSlice';



//id = nanoid();

export const App = () => {

  // state = {
  //   contacts: [],
  //   filter: ''
  // };

  // const [contacts, setContacts] = useState(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
    
  //   if (parsedContacts) {
  //     return parsedContacts;
  //   } else {
  //     return [];
  //   };
  // });

  // const contacts = useSelector(contactsSelector).contacts;
  const filterValue = useSelector(filterSelector).value;
  
  
  // const [filterValue, setFilterValue] = useState('');

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
    
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   };

  // };

  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
    
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   };
  // }, []);

  // componentDidUpdate(prevState) {

    
  //   const nextContacts = this.state.contacts;
  //   const prevContacts = prevState.contacts;

  //   if (nextContacts !== prevContacts) {
  //     localStorage.setItem('contacts', JSON.stringify(nextContacts));
  //   }
  // };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);


  

  // const handleFilterInput = (e) => {
  //   let { value } = e.target;
  //   setFilterValue(value);
  // };


  // const filterContacts = () => {
  
  //   let normalizedFilter = filterValue.toLowerCase();  
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const deleteContact = (contactId) => {
  //   setContacts(contacts.filter(contact => contact.id !== contactId));
  // };
  
  
  // let filteredContacts = filterContacts();


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
        <h2>Phonebook</h2>
        <ContactForm />

        <h2>Contacts</h2>

        <Filter
          value={filterValue}
        />
        
        <ContactList/>

      </div>
    );
  };
