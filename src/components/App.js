import React, { useState, useEffect} from 'react';
import './App.css';
import Header from './Header';
import Addcontact from './Addcontact';
import ContactList from './ContactList';
import { uuid } from 'uuidv4';


function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]); 

 const addContactHandler= (contact) =>{
  console.log(contact);
  setContacts([...contacts, {id: uuid(), ...contact}]);
 };

 const removeContactHandler= (id)=>{
  const newContactList = contacts.filter((contact)=>{
    return contact.id !== id; 
  });
  setContacts(newContactList);
 }

 useEffect(()=>{
  const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(retrieveContacts) setContacts(retrieveContacts);
 }, [contacts])


 useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
 }, [contacts])

  return (
    <div className = "ui container">
      <Header />
      <Addcontact addContactHandler = {addContactHandler}/>
      <ContactList contacts = {contacts} getContactId = {removeContactHandler} />  
    </div>
  );
}

export default App;
//property name ={array/thing that has to be passed on as prop}