import React, { useState, useEffect } from 'react'
import UserContext from '../userContext';



export default function UserList(){

    const userName = React.useContext(UserContext);
    //console.log("context user: "+userName);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        if(!userName)
        return;

        fetch(`https://api.github.com/search/users?q=${userName}`)
        .then(res => res.json())
        .then(data => setUserList(data.items))
        .catch(err => console.log("api error: "+err));
    }, [userName])
    
    if(!userName){
        return "No input";
    }
   
    if(!userList)
        return "API error";
       
    if(userList.length === 0)
        return "No Users"
  
    

//console.log("all users List" +userList);

return userList.map(user => <p>{user.login}</p>);

}