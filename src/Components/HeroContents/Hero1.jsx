import React from 'react'
import styles from './Hero1.module.css'
import FoodMenu from '../FoodMenu/FoodMenu'
function Hero1() {
  return (
    <>
    <div className={styles.box}>
        <div className={styles.ibox1}>
            <div>
                <h1>Enjoy Our
                    Delicious Meal
                </h1>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur 
                    adipisicing elit. Illo fugiat omnis ea laborum sequi, dolore 
                    eum exercitationem accusantium nihil harum!</p>
            </div>
            <div className={styles.btn}>
                <button>Book a Dish</button>
            </div>
        </div>
        <div className={styles.ibox2}>
            <img src='foodthali.jpg'></img>
        </div>
    </div>
    <FoodMenu/>
    </>
  )
}

export default Hero1