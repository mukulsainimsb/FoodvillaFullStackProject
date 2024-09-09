import React, { useContext } from 'react'
import styles from './Header.module.css'
import Hero1 from '../HeroContents/Hero1'
import {useNavigate} from 'react-router-dom'
import { FoodContext } from '../ContextAPI/FoodContext';
function Header() {
const navigate = useNavigate();
const {activeComponent,handleActiveComponent,isAuthenticated} = useContext(FoodContext);

const handleAbout=()=>{
  handleActiveComponent('about');
  navigate('/about');
}
const handleHome=()=>{
  handleActiveComponent('home')
  navigate('/hero')
}
const handleMenu=()=>{
  handleActiveComponent('menu')
  navigate('/foodmenu')
}
const handleContact=()=>{
  handleActiveComponent('contact')
  navigate('/footer')
}
  return (
    <>
    <div className={styles.box}>
       <div className={styles.box1}>
        <h1>F<span className={styles.oo}>oo</span>dVilla</h1>
       </div>
       <div className={styles.box2}>
        <ul className={styles.lists}>
          {isAuthenticated && <li onClick={handleHome} >Home</li>}
          {isAuthenticated && <li onClick={handleMenu}>Menu</li> }
          {isAuthenticated && <li onClick={handleAbout}>About</li> }
          {isAuthenticated && <li onClick={handleContact}>Contact</li> }
        </ul>
        </div>
        <div className={styles.box3}>
       {!isAuthenticated && <button onClick={()=>navigate('/')} className={styles.btn1}>Login</button> }
        {!isAuthenticated && <button onClick={()=>navigate('/register')} className={styles.btn2}>Register</button> }
       </div>
       </div>
       </>

  )
}

export default Header