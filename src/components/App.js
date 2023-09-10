import React from 'react';
import './App.css';
import Header from './Header';
import Addcontact from './Addcontact';
import ContactList from './contactlist';


function App() {

  const contacts = [
    {
      id:"1",
      "name":"Kritvi Sharma",
      "email":"kritvisharma0912@gmail.com",
    },
    {
      id:"2",
      "name":"Aryan Vatsal",
      "email":"aryanvatsal04@gmail.com",
    },
  ]
  return (
    <div className = "ui container">
      <Header />
      <Addcontact />
      <ContactList contacts= {contacts}/> 
    </div>
  );
}

export default App;
