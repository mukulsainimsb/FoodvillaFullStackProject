import React from 'react'
import styles from './AboutComponent.module.css'
import Team from '../Team/Team'

function AboutComponent() {
  return (
    <>
    <div className={styles.box}>
        <div className={styles.images}>
            <div className={styles.img1}>
            <img id={styles.img1} src='cafe2.jpg'></img>
            <img id={styles.img2} src='cafe3.jpg'></img>
            </div>
            <div className={styles.img2}>
            <img id={styles.img3} src='cafe4.jpg'></img>
            <img id={styles.img4} src='cafe5.jpg'></img>
            </div>
        </div>
        <div className={styles.text}>
            <h1 className={styles.wlcmheading}>Welcome to FoodVilla</h1>
            <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Neque nesciunt dignissimos qui 
                 asperiores molestiae tempora, quis, debitis magnam,
                  quam quibusdam quo. Dolores vitae omnis itaque quaerat
                   asperiores dolorum dolor tempore voluptates sunt?
                    Sed non officiis qu
                am provident possimus, deserunt blanditiis?</p>
                <div className={styles.exp}>
                    <div>
                <h1>15</h1>
                <p>Years of<br/><span>EXPERIENCE</span></p>
                </div>
                <div>
                <h1>50</h1>
                <p>Popular<br/><span>MASTER CHEFS</span></p>
                </div>
                </div>
        </div>
    </div>
    <Team/>
    </>)
}

export default AboutComponent