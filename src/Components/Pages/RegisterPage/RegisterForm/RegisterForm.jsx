import React from "react";
import styles from "./css/styles.module.css";
import media from "./css/media.module.css";
import RegisterUseForm from "./RegisterUseForm";
import RegisterValidate from "./RegisterValidate";
import { Button } from "../../../../Styles/LongButtonStyle";
import { Link } from "react-router-dom";
import Header from "../../../LoginRegisterHeader/Header";
const RegisterForm = ({submitForm}) => {
  const {
    handleChange,
    handleSubmit,
    UploadPhoto,
    photo,
    values,
    country,
    getCountry,
    getState,
    handleCountry,
    handleCity,
    cities,
    errors,
  } = RegisterUseForm(submitForm, RegisterValidate);

  return (
    <>
      <Header title = 'Create Account'/>
      <form action="#" className={styles.form} onSubmit={handleSubmit}>
        <div className={`${styles.upload} ${media.upload}`}>
          <div className={`${styles.profileImg} ${media.profileImg}`}>
             <input type="file" id="photo" name="uploadImg" onChange={UploadPhoto} accept="image/*" />
             <img src={photo} alt="photo" />
          </div>
          <label htmlFor="photo">Upload photo</label>
        </div>
        <div
          className={`${styles.inputBlog} ${media.inputBlog} ${
            errors.firstName && styles.invalid
          }`}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            id="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <span className={styles.error}>{errors.firstName}</span>
          )}
        </div>
        <div
          className={`${styles.inputBlog} ${media.inputBlog} ${
            errors.lastName && styles.invalid
          }`}
        >
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            id="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className={styles.error}>{errors.lastName}</span>
          )}
        </div>
        <div
          className={`${styles.inputBlog} ${media.inputBlog} ${
            errors.email && styles.invalid
          }`}
        >
          <label htmlFor="email">Email or phone number</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <span className={styles.error}>{errors.email}</span>}
        </div>
        <div
          className={`${styles.inputBlog} ${media.inputBlog} ${
            errors.date && styles.invalid
          }`}
        >
          <label htmlFor="date">Date of birth (MM/DD/YY)</label>
          <input
            type="date"
            name="date"
            id="date"
            value={values.date}
            onChange={handleChange}
          />
          {errors.date && <span className={styles.error}>{errors.date}</span>}
        </div>
        <div className={`${styles.selectBlog} ${media.selectBlog}`}>
          <label htmlFor="country">Country</label>
          <select
            name="country"
            id="country"
            onChange={(e) => handleCountry(e)}
          >
            <option >Country</option>
            {country.map((items) => {
              return (
                <option key={items} value={getCountry}>
                  {items}
                </option>
              );
            })}
          </select>
        </div>
        <div className={`${styles.selectBlog} ${media.selectBlog}`}>
          <label htmlFor="state">State</label>
          <select name="state" id="state" onChange={(e) => handleCity(e)}>
            <option >State</option>
            {getState.map((items) => {
              return (
                <option key={items} value={items}>
                  {items}
                </option>
              );
            })}
          </select>
        </div>
        <div className={`${styles.selectBlog} ${media.selectBlog}`}>
          <label htmlFor="city">City</label>
          <select name="city" id="city">
            <option>City</option>
            {cities.map((items) => {
              return (
                <option key={items.name} value={items.name}>
                  {items.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className= {`${styles.inputBlog} ${media.inputBlog} ${
            errors.password && styles.invalid
          }`}>
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            id="password"
            value={values.password}
            onChange={handleChange}
          />
           {errors.password && <span className={styles.error}>{errors.password}</span>}
        </div>
        <div className= {`${styles.inputBlog} ${media.inputBlog} ${
            errors.confirmPassword && styles.invalid
          }`}>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Repeat password"
            id="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span className={styles.error}>{errors.confirmPassword}</span>}
        </div>
        <div className={`${styles.checkBlog} ${media.checkBlog}`}>
          <input type="checkbox" name="checked" id="checked" />
          <label htmlFor="checked">Im student</label>
        </div>
        <div className={styles.btnDiv}>
          <Button type = "submit">Create acd ccount</Button>
       </div>
        <p className={`${styles.footerText} ${media.footerText}`}>
          Already have an account?
          <Link to="/Login">Log In</Link>
        </p>
      </form>
    </>
  );
};

export default RegisterForm;
