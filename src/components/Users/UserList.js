import Card from "../UI/Card"
import style from './UserLIst.module.css'
import DeleteList from '../UI/DeleteList'
import ErrorDelate from "../UI/ErrorDelate"

const UserList = (props) =>{
    console.log(props)
    function deleteHandler(e){
       props.onSetHand(
        props.users.filter((el)=>el.id !== e.target.id)
       )
    }

    
    return(
        <Card className={style.users} >  
            <ul className={style.list}>
                {props.users.map(user=>(
                    <li key={user.id} >
                        { user.name }

                      
                          <span> years   { user.age } old</span>
                         <DeleteList onDelete={deleteHandler} id={user.id} />
                         {/* <ErrorDelate/> */}
                    </li>
                ))}
            </ul>

           
        </Card>
    )
   
}

export default UserList;