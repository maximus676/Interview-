import React from "react";
import {reduxForm} from "redux-form";
import {maxLengthThunkCreator, required} from "../../utils/validators/validators";
import {createField, Input} from "../common/FormsControls/FormsControls";
import s from "./Users.module.css";


const maxLength30  = maxLengthThunkCreator(30)

const UserDataForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div><button className={s.selectedPages}>Сохранить</button></div>
        <div>
            <b>First_name </b> : { createField("Введите имя", "first_name", [required,maxLength30], Input) }
        </div>
        <div>
            <b>Last_name </b> : { createField("Введите фамилию", "last_name", [required,maxLength30], Input) }
        </div>
        <div>
            <b>Email </b> : { createField("Введите email ", "email", [required,maxLength30], Input) }
        </div>
    </form>
}

const UserDataFormReduxForm = reduxForm({form: "edit-user"})(UserDataForm)

export default UserDataFormReduxForm;