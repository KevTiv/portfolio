import styles from '../../styles/Styles.module.scss'
import navStyles from '../../styles/Navbar.module.scss'
import { useEffect, useRef } from 'react'
import { showNav, hideNav, scrollToSection, menuOptionHoverOn, menuOptionHoverOff } from '../../animation/navbarAnimation';
import { isClickable, isNotClickable } from '../../animation/globalAnimation';

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
                    <span className={`${styles.permanent_focus} click`} onMouseEnter={(e)=>{
                        menuOptionHoverOn(e);
                        isClickable();
                        }} 
                        onMouseLeave={(e)=>{
                            menuOptionHoverOff(e);
                            isNotClickable();
                            }}>
                        &#60;&#47;&#62;
                    </span>
                </div>
                <div>
                    <ul>
                        <li onMouseEnter={(e)=>{
                            menuOptionHoverOn(e);
                            isClickable();
                            }} 
                            onMouseLeave={(e)=>{
                                menuOptionHoverOff(e);
                                isNotClickable();
                                }} 
                            onClick={()=>scrollToSection('#about')}>About</li>
                        <li onMouseEnter={(e)=>{
                            menuOptionHoverOn(e);
                            isClickable();
                            }} 
                            onMouseLeave={(e)=>{
                                menuOptionHoverOff(e);
                                isNotClickable();
                                }} 
                            onClick={()=>scrollToSection('#skills')}>Skills</li>
                        <li onMouseEnter={(e)=>{
                            menuOptionHoverOn(e);
                            isClickable();
                            }} 
                            onMouseLeave={(e)=>{
                                menuOptionHoverOff(e);
                                isNotClickable();
                                }} 
                            onClick={()=>scrollToSection('#portfolio')}>Portolio</li>
                        <li onMouseEnter={(e)=>{
                            menuOptionHoverOn(e);
                            isClickable();
                            }} 
                            onMouseLeave={(e)=>{
                                menuOptionHoverOff(e);
                                isNotClickable();
                                }} 
                            onClick={()=>scrollToSection('#contact')}>Contact</li>
                    </ul>
                </div>
            </nav>
        </div>
    </>
  )
};

export default Navbar;
