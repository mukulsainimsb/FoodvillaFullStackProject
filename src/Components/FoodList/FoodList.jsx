import React, { useContext } from 'react'
import { FoodContext } from '../ContextAPI/FoodContext'
import styles from './FoodList.module.css';
import Footer from '../Footer/Footer';

function FoodList() {
  const {specificItems} = useContext(FoodContext);
        return (
          <>
          <div className={styles.box}>
              
             {specificItems.length>0 ? specificItems.map((items,i)=>(
                  <div key={i} className={styles.card}>
                  <img src={`http://localhost:8081/images/${items.image}`} alt='image'></img>
                  <div className={styles.ibox}>
                  <h1>{items.name}</h1>
                  <p>{items.text}</p>
               <button>${items.price}</button>
               </div>
              </div>
             ))
              : <div className={styles.card}>
                <img src='./error.jpg' alt='error_image'></img>
                <div className={styles.ibox}>
                <h1>No items Available</h1>
                <p>Please contact your service provider</p>
                <button>$0</button>
                </div>
                </div>
      }
          </div>
          <Footer/>
          </>
        )
      }
      
export default FoodList