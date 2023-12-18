import React from 'react'
import {BsMicrosoft} from 'react-icons/bs'
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.contacts}>
          <a href="https://www.microsoft.com/ko-kr/">
            {" "}
            <BsMicrosoft/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer