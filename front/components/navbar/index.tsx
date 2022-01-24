import styles from '../../styles/Styles.module.scss'
import navStyles from '../../styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <>
        <div className={styles.components}>
            <nav className={navStyles.navbar}>
                <div>
                    <span>
                        Kevin Tivert
                    </span>
                </div>
                <div>
                    <ul>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Portolio</li>
                        <li>Contact</li>
                        <li>Resume</li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
  )
};

export default Navbar;
