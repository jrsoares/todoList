import Logo from '../assets/Logo.svg'
import styles from './Header.module.css'
import { NewTask } from './NewTask'

export function Header() {
  return (
    <>
        <header className={styles.wrapper}>
          <img src={Logo} alt="" />
        </header>
      <NewTask /> 
    </>
  )
}