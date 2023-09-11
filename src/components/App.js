import React, { useState} from 'react';
import './App.css';
import Header from './Header';
import Addcontact from './Addcontact';
import ContactList from './ContactList';


function App() {

 const [contacts, setContacts] = useState([]); //intialization of useState with empty array
  return (
    <div className = "ui container">
      <Header />
      <Addcontact />
      <ContactList contacts= {contacts}/> 
    </div>
  );
}

export default App;
