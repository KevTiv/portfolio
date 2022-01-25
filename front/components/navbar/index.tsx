import styles from '../../styles/Styles.module.scss'
import navStyles from '../../styles/Navbar.module.scss'
import { useEffect, useRef } from 'react'
import { showNav, hideNav } from '../../animation/navbarAnimation';

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
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#skills">Skills</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portolio</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>Resume</li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
  )
};

export default Navbar;
