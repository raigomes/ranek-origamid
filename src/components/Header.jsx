import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/" end>Produtos</NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="contato">Contato</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header