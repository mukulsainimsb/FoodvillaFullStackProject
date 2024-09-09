import React from 'react'
import styles from './AboutHeader.module.css'
import AboutComponent from '../AboutComponent.jsx/AboutComponent'

function AboutHeader() {
    return (
        <>
        <div className={styles.box}>
        <h1>About Us</h1>
        </div>
        <AboutComponent/>
        </>
    )
}

export default AboutHeader