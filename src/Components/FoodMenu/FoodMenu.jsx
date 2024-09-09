import React, { useContext } from 'react'
import styles from './FoodMenu.module.css'
import FoodList from '../FoodList/FoodList'
import { FaSearch } from "react-icons/fa";
import { FoodContext } from '../ContextAPI/FoodContext'
function FoodMenu() {
  const {handleBreakfast,handleLunch,handleDinner,handleSearch} = useContext(FoodContext);
  return (
    <>
    <div className={styles.box}>
        <div className={styles.heading}>
            <h1>---Food Menu---</h1>
        </div>
        <div className={styles.list}>
            <ul>
                <li onClick={()=>handleBreakfast()}>Breakfast</li>
                <li onClick={()=>handleLunch()}>Lunch</li>
                <li onClick={()=>handleDinner()}>Dinner</li>
            </ul>
        </div>
        <input onChange={()=>handleSearch(event)} type='text' name='search' placeholder='Search food...'/><FaSearch className={styles.icon} 
        style={{color:'rgb(255 87 51)', fontSize:'25px'}}/>
    </div>
    <FoodList/>
    </>
  )
}

export default FoodMenu