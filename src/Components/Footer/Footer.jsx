import React from 'react'
import styles from './Footer.module.css'
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaCopyright } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (<>
  <div className={styles.Mainbox}>
    <div className={styles.midbox1}>
    <div className={styles.box1}>
        <h1>Company---</h1>
        <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Condition</li>
        </ul>
    </div>
    <div className={styles.box2}>
        <div>
        <h1>Contact---</h1>
        </div>
        <div>
    <MdLocationPin className={styles.location} /> <p> 123 Street,New York, USA</p>
    </div>
    <div>
    <FaPhoneAlt className={styles.phone} /> <p> +917078727270 </p>
    </div>
    <div>
    <IoMdMail className={styles.mail} /> <p> foodvilla@gmail.com</p>
    </div>
    <div className={styles.socialbox}>
    <FaFacebookSquare className={styles.logos} />
    <FaLinkedin className={styles.logos} />
    <FaTwitterSquare className={styles.logos} />
    </div>
    </div>
    <div className={styles.box3}>
        <h1>Opening---</h1>
        <h4>Monday - Saturday</h4>
        <p>09am - 07pm</p>
        <h4>Sunday</h4>
        <p>10am - 08pm</p>
    </div>
  </div>
  <div className={styles.midbox2}>
    <h6><FaCopyright /> All Right Reserved. </h6>
  </div>
  </div>
  </>
  )
}

export default Footer