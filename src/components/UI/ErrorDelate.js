// import { useState } from "react";
import style from "./ErrorDelate.module.css";
import Card from "./Card";



function ErrorDelate(props) {




  return (
    <div className={style.backdrop}>
      <Card className={style.modal}>
        
          <header className={style.header}>
            <h2>Удаление пользователя!</h2>
          </header>
          <div className={style.content}>
            <p>Вы действительно хотите удалить?</p>
          </div>
          <footer className={style.actions}>

            <button className={style.button1} id={props.id} onClick={props.onDelete}> ДА</button>
            <button className={style.button1} onClick={() => {
              props.onNone(false)
            }} >НЕТ</button>
            
          </footer>
      </Card>
    </div>
  );
}

export default ErrorDelate;
