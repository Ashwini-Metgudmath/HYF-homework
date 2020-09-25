import React, { useState } from 'react'
import UserContext from '../userContext';

export default function UserInput({
    setUserName,
}){

    const userName = React.useContext(UserContext);
    const [User, setUser] = useState(userName);


    const updateUser = (e) =>{
        e.preventDefault();
        setUserName(User);
        console.log('updated user'+User)
    }
    return(
        <form onSubmit={updateUser}>
         <input type="text" 
         placeholder="Enter name"
         value={User}
         onChange={e => setUser(e.target.value)}></input>
        </form>
       
    );
}