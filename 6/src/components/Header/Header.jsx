import React, {useState} from "react";
import s from "./Header.module.css";
import Logo from "../Icons/Logo.png";


const Header = (props) => {
    return (
        <header className={s.header}>
            <img  src = {Logo}/>
        </header>);
}

export default Header;