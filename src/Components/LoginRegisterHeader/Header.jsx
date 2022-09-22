import React from 'react';
import styles from './css/styles.module.css';
import media from './css/media.module.css';


const Header = (props) => {
  return (
    <>
      <h3 className={`${styles.title} ${media.title}`}>{props.title}</h3>
      <p className={`${styles.text} ${media.text}`}>For xWorld students</p>
    </>
  )
}

export default Header