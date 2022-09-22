import React from 'react';
import styles from './css/styles.module.css';
import media from './css/media.module.css';
import {IoMailUnreadSharp} from 'react-icons/io5';
import {Button} from '../../../../Styles/LongButtonStyle'
import Header from '../../../LoginRegisterHeader/Header';

const FormSuccess = () => {
  return (
  <>
    <Header title  = 'Create account'/>
    <div className={styles.container}>
        <div className={`${styles.icon} ${media.icon}`}>
          <IoMailUnreadSharp/>
        </div>
        <p className={`${styles.text} ${media.text}`}>
        We have sent an email with a confirmation link to your email address
        </p>
        <Button type='submit' disabled = {true}>Check</Button>
   </div>
  </>

  )
}

export default FormSuccess;