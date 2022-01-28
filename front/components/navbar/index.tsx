import styles from '../../styles/Styles.module.scss'
import navStyles from '../../styles/Navbar.module.scss'
import { useEffect, useRef } from 'react'
import { showNav, hideNav, scrollToSection } from '../../animation/navbarAnimation';

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
    let previousScrollPosition: number = window.pageYOffset;
    
    window.onscroll = () => {
        let currentScrollPosition: number = window.pageYOffset;

        if(previousScrollPosition > currentScrollPosition){
            showNav(navRef);
        }else{
            hideNav(navRef);
        }
        previousScrollPosition = currentScrollPosition;
    }

  },[])
  return (
    <>
        <div className={styles.components} ref={navRef}>
            <nav className={navStyles.navbar}>
                <div>
                    <span>
                        &#60;&#47;&#62;
                    </span>
                </div>
                <div>
                    <ul>
                        <li onClick={()=>scrollToSection('#about')}>About</li>
                        <li onClick={()=>scrollToSection('#skills')}>Skills</li>
                        <li onClick={()=>scrollToSection('#portfolio')}>Portolio</li>
                        <li onClick={()=>scrollToSection('#contact')}>Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
  )
};

export default Navbar;
