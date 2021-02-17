import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../Icons/images.png";


const ProfileInfo = (props) => {
    if (!props.profile){
        return <Preloader />
    }

    return (
        <div>
            <img className={s.content__img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4repqoJ7ynFgnzzeyzDRZqe2zrdw2FdEdvQ&usqp=CAU"/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.avatar != null ? props.profile.avatar : userPhoto} className={s.img}/>

                <div>
                    <b>First_name </b> : {props.profile.first_name }
                </div>
                <div>
                    <b>Last_name</b> : {props.profile.last_name}
                </div>
                <div>
                    <b>Email </b> : {props.profile.email}
                </div>

            </div>
        </div>
    );
}

export default ProfileInfo;