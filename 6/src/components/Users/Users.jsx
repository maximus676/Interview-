import React, {useState} from "react";
import s from "./Users.module.css";
import userPhoto from "../Icons/images.png";
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import UserDataForm from "./UserDataForm";

let Users = (props) => {

    let [editMode, setEditMode] = useState(false);

    const onSubmit = (formData) => {
        console.log(props)
        props.addUser(formData.first_name, formData.last_name, formData.email, null )
        setEditMode(false);
    }

    return  <div>
         <div className={s.paginator}>
             <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                        totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}
                        portionSize={props.portionSize} className={s.selectedPages}  />
         </div>
        {editMode
            ? <UserDataForm onSubmit={onSubmit} />
            : <button onClick={() => setEditMode(true)} className={s.selectedPages}>Добавить</button>}
        {
            props.users.map((user, index) => <div key = {user.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id} >
                                <img src={user.avatar != null ? user.avatar : userPhoto}  className={s.img}/>
                            </NavLink>
                        </div>
                    </span>
                <span className={s.delet} >
                    <span className={s.name}>
                        <div>{user.first_name}</div>
                    </span>
                    <button onClick={() => props.deleteUser(index)} className={s.selectedPages}>Удалить</button>
                </span>

            </div>)
        }
    </div>
}

export default Users
