import React from 'react'
import styles from './Team.module.css'
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Team() {
  return (
    <>
    <div className={styles.box}>
        <div className={styles.heading}>
            <h1>---Our Master Chefs---</h1>
        </div>
        <div className={styles.images}>
            <div className={styles.image1}>
                <img src='chef1.jpg'></img>
                <h4>Jamie Oliver</h4>
                <p>Executive Chef</p>
                <div className={styles.chefsocial}>
        <FaFacebookSquare className={styles.cheficons} />
        <FaTwitterSquare className={styles.cheficons} />
        <FaInstagramSquare className={styles.cheficons} />
        </div>
            </div>
            <div className={styles.image2}>
            <img src='chef2.jpg'></img>
            <h4>Alice Waters</h4>
            <p>Saucier</p>
            <div className={styles.chefsocial}>
        <FaFacebookSquare className={styles.cheficons} />
        <FaTwitterSquare className={styles.cheficons} />
        <FaInstagramSquare className={styles.cheficons} />
        </div>
            </div>
            <div className={styles.image3}>
            <img src='chef3.jpg'></img>
            <h4>Thomas Keller</h4>
            <p>Pastry Chef</p>
            <div className={styles.chefsocial}>
        <FaFacebookSquare className={styles.cheficons} />
        <FaTwitterSquare className={styles.cheficons} />
        <FaInstagramSquare className={styles.cheficons} />
        </div>
            </div>
            <div className={styles.image4}>
            <img src='chef4.jpg'></img>
            <h4>Emeril Lagasse</h4>
            <p>Commis Chef</p>
            <div className={styles.chefsocial}>
        <FaFacebookSquare className={styles.cheficons} />
        <FaTwitterSquare className={styles.cheficons} />
        <FaInstagramSquare className={styles.cheficons} />
        </div>
            </div>
        </div>

    </div>
    </>

  )
}

export default Team