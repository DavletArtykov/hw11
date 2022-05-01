import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import style from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteresUserName, setEnteresUserName] = useState("");
  const [enteresAge, setEnteresAge] = useState("");
  const [error, setError] = useState(false);





  const addUserHandler = (event) => {
    
    event.preventDefault();
    if (enteresUserName.trim().length === 0 || enteresAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Pleasse enter a valid name and age (non- empty values)",
      });
      return;
    };
    if (+enteresAge < 1) {
      setError({
        title: "invalid age ",
        message: "Please enter a valid age (>0),",

      });
      return;
    };
    
    
    props.onAddUser(enteresUserName,enteresAge)
   
    setEnteresAge('')
    setEnteresUserName('')
 

  };

  const userNameChangeHandler = (event) => {
    setEnteresUserName(event.target.value);
    // console.log(enteresUserName);
  };

  const ageChangeHandler = (event) => {
    setEnteresAge(event.target.value);
    // console.log(enteresAge);
  };


const errorhandler = () =>{
    setError(null)
}


  return (
      <div>
          {error && <ErrorModal  title={error.title} message={error.message} onConfirm={errorhandler}/>}
    <Card  className={style.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input
          type="text"
          id="username"
          value={enteresUserName}
          onChange={userNameChangeHandler}
        />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={enteresAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
 
  );

  }
export default AddUser;
