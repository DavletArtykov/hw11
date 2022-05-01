import { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import style from "./DeleteList.module.css";
import ErrorDelate from "./ErrorDelate";

function DeleteList(props) {
  console.log(props)


const [opneModal,setOpeneModal] = useState(false)

  
  return (
    <div>
      <Card>
        <button className={style.button1} onClick={() =>{
          setOpeneModal(true)
        }}>
          Delete
        </button>
        {opneModal  && <ErrorDelate id={props.id} onDelete={props.onDelete} onNone={setOpeneModal} />}
      </Card>

      {/* {<ErrorDelate />} */}
    </div>
  );
}

export default DeleteList;
