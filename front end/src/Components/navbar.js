
import styles from '../Components/navbar.module.css'
import {Link} from "react-router-dom"

export const Navbar=()=>{

    return(    
    <>
     <nav className={styles.nav}>
        <div className={styles.nav_logo}>
             <img src="./images/logo.png" alt="hopitalLogo" className={styles.img_logo}/>
        </div>
        <ul className={styles.nav_links}>
        
            <li className={styles.link}><Link to="/"><a>Acceuil</a></Link></li>
            <li className={styles.link}><Link to="/contact">Contact</Link></li>
            <li className={styles.link}><Link to="/Recrutement">Recrutement</Link></li>
            <li className={styles.link}><Link to="/infos">Infos</Link></li>
            <li className={styles.link}><Link to="/login">Login</Link></li>
         
        </ul>
    </nav>
    </>    
    )
}