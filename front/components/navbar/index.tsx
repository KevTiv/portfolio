import styles from '../../styles/Styles.module.scss'
import navStyles from '../../styles/Navbar.module.scss'
import { useEffect, useRef } from 'react'
import { showNav, hideNav, scrollToSection, menuOptionHoverOn, menuOptionHoverOff } from '../../animation/navbarAnimation';

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
                <div onClick={()=>scrollToSection('#intro')}>
                    <span className={styles.permanent_focus} onMouseOver={(e)=>menuOptionHoverOn(e)} onMouseLeave={(e)=>menuOptionHoverOff(e)}>
                        &#60;&#47;&#62;
                    </span>
                </div>
                <div>
                    <ul>
                        <li onMouseOver={(e)=>menuOptionHoverOn(e)} onMouseLeave={(e)=>menuOptionHoverOff(e)} onClick={()=>scrollToSection('#about')}>About</li>
                        <li onMouseOver={(e)=>menuOptionHoverOn(e)} onMouseLeave={(e)=>menuOptionHoverOff(e)} onClick={()=>scrollToSection('#skills')}>Skills</li>
                        <li onMouseOver={(e)=>menuOptionHoverOn(e)} onMouseLeave={(e)=>menuOptionHoverOff(e)} onClick={()=>scrollToSection('#portfolio')}>Portolio</li>
                        <li onMouseOver={(e)=>menuOptionHoverOn(e)} onMouseLeave={(e)=>menuOptionHoverOff(e)} onClick={()=>scrollToSection('#contact')}>Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
  )
};

export default Navbar;
