import estilo from '../../assets/css/Estilo.module.css'
import logo from '../../logo2.png'
const Header = () => {
  return(
    <header className={estilo.header}>
        <div className={estilo.logo}>
          <img src={logo}/> 
        </div>
        <div className={estilo.slogan}>
          Felipi Films
        </div>
    </header>
  )
}

export default Header;