import React from 'react'
import styles from './css/styles.module.css';
import media from './css/media.module.css';


const Header = () => {
  return (
    <>
    <h4 className={`${styles.minTitle} ${media.minTitle}`}>
      STUDENTS CASE
    </h4>
    <h2  className={`${styles.title} ${media.title}`}>
      Projects done by students.
    </h2>
    <p className={`${styles.text} ${media.text}`}>
      When DX was founded, we set out to make the tools the future would be built on. Tools designed to work on industrial scale. hyper-connected, just-in-time global economy. The kind that makes awesome, amazing, blow-your-mind things possible. From the steam engine.
    </p>
    </>
  )
}

export default Header