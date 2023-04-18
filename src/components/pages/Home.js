import styles from './Home.module.css'
import tela from '../../img/TelaRunas.png'
function Home(){
return(
    
    <section className={styles.home_container}>
        <img src={tela} alt="Tela home"></img>
        <a href="/">Precisão</a>
    </section>
)

}

export default Home