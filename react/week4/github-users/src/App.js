import React,{ useState } from 'react';
import './App.css';
import UserInput from './components/userInput'
import UserList from './components/userList';
import UserContext from './userContext';

function App() {
  const [userName, setUserName] =  useState('');
 
  return (
    <div className="App">
      <h2>Get github users app</h2>
      <UserContext.Provider value={userName}>
      <UserInput setUserName={setUserName}/>
      <UserList />
      </UserContext.Provider>
    </div>
  );
}

export default App;
