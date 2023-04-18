import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/Logo.png'
import Titulo from '../../img/Titulo.png'
function Navbar(){
    return(
<nav className={styles.navbar}>
<Container>
        

        <Link className={styles.logo} to="/"><img src={logo} alt="LogoLol"></img></Link>
        <Link className={styles.titulo} to="/"><img src={Titulo} alt="TituloLeagueOfRunas"></img></Link>
        
        <ul className={styles.list}>
            <li className={styles.item}>
            <Link to="/">HOME</Link> 
            </li>
            
            <li className={styles.item}>
            <Link to="/runas">RUNAS</Link>
            </li>

            <li className={styles.item}>
            <Link to="/gitHub">GITHUB</Link>  
            </li>

            <li className={styles.item}>
            <Link to="/adicionar">ADICIONAR</Link> 
            </li>
        </ul>
        
        
</Container>
</nav>
    )
    
}

export default Navbar