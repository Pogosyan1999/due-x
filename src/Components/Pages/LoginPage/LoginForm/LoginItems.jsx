import { FaUserAlt } from "react-icons/fa";
import {IoMdKey} from "react-icons/io";

export const LoginItems = [
    {
        id:1,
        labelFor:'login',
        label:'X-ID',
        inputType:'text',
        inputName:'login',
        inputId:'login',
        placeholder:'Enter your X-ID',
        icon:<FaUserAlt/>

    },

    {
        id:2,
        labelFor:'password',
        label:'Password',
        inputType:'password',
        inputName:'password',
        inputId:'password',
        placeholder:'Enter your password',
        icon:<IoMdKey/>

    },
];

