
import { useState } from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {
  const [userList,setUserList] = useState([])


  const addUserHandler = (uName,uAge) =>{
    // console.log(uName, uAge);
        setUserList(prevUserList =>{
          return[...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}]
        })
  }





  return (
    <div className="App">
        <AddUser onAddUser={addUserHandler} />
        <UserList users= {userList} onSetHand={setUserList} />
    </div>
  );
}

export default App;
