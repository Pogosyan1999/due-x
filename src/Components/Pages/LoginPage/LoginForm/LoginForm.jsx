import React from "react";
import styles from "./css/styles.module.css";
import media from "./css/media.module.css";
import { Button } from "../../../../Styles/LongButtonStyle";
import { Link } from "react-router-dom";
import { LoginItems } from "./LoginItems";
import Header from "../../../LoginRegisterHeader/Header";


const LoginForm = () => {
  return (
    <>
      <div className={`${styles.header} ${media.header}`}>
        <Header title = "Login"/>
      </div>
      <form action="#" className={styles.form}>
        {LoginItems.map((items) => {
          return (
            <div
              className={`${styles.inputBlog} ${media.inputBlog}`}
              key={items.id}
            >
              <label htmlFor={items.labelFor}>{items.label}</label>
              <div
                className={`${styles.inputContainer} ${media.inputContainer}`}
              >
                <div className={`${styles.icon} ${media.icon}`}>
                  {items.icon}
                </div>
                <input
                  type={items.inputType}
                  name={items.inputName}
                  placeholder={items.placeholder}
                  id={items.inputId}
                />
              </div>
            </div>
          );
        })}

        <div className={styles.btnDiv}>
          <Button disabled={true}>Log In</Button>
        </div>
        <p className={`${styles.footerText} ${media.footerText}`}>
          Already have an account?
          <Link to="/register">Register</Link>
        </p>
      </form>
    </>
  );
};

export default LoginForm;
