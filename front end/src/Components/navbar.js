import './navbar.css'
import {Link} from "react-router-dom"
export const Navbar=()=>{
    return(    
    <nav className="nav">
        <div className="nav-logo">
             <img src="./images/logo.png" alt="hopitalLogo"/>
        </div>
        <ul className="nav-links">
        
            <li className="link"><Link to="/"><a>Acceuil</a></Link></li>
            <li className="link"><Link to="/contact">Contact</Link></li>
            <li className="link"><Link to="/Recrutement">Recrutement</Link></li>
            <li className="link"><Link to="/infos">Infos</Link></li>
         
        </ul>
    </nav>
        
    )
}