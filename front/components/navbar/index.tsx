import styles from '../../styles/Styles.module.scss'
import navStyles from '../../styles/Navbar.module.scss'
import { useEffect, useRef, useState } from 'react'
import { showNav, hideNav, scrollToSection, menuOptionHoverOn, menuOptionHoverOff, openMobileMenu, closeMobileMenu, animateBurgerMenu } from '../../animation/navbarAnimation';
import { isClickable, isNotClickable } from '../../animation/globalAnimation';

const Navbar = () => {
    const [isMediaMobile, setMediaMobile] = useState<boolean>(false);
    const navRef = useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
    let previousScrollPosition: number = window.pageYOffset;
    
    setMediaMobile(window.innerWidth <= 640 ? true : false);

    window.addEventListener('resize',()=>{
        setMediaMobile(window.innerWidth <= 640 ? true : false);
    });
    
    window.onscroll = () => {
        let currentScrollPosition: number = window.pageYOffset;

        if(previousScrollPosition > currentScrollPosition){
            showNav(navRef);
        }else{
            hideNav(navRef);
        }
        previousScrollPosition = currentScrollPosition;
    }
    return()=>{
        window.removeEventListener('resize',()=>{
            setMediaMobile(window.innerWidth <= 640 ? true : false);
        });
    }
  },[])
  return (
    <>
        <div className={styles.components} ref={navRef}>
            {isMediaMobile ? <SmScreenNavbar/> : <LgScreenNavbar/>}
        </div>
    </>
  )
};
const SmScreenNavbar = ()=>{
    const mobNavRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return(
        <>
            <nav className={navStyles.mobNav} >
                <div onClick={()=>scrollToSection('#intro')}>
                    <span className={`${styles.permanent_focus}`}>
                        &#60;&#47;&#62;
                    </span>
                </div>

                <div className={navStyles.burgerContainer} onClick={()=>{
                    setIsOpen(!isOpen);
                    isOpen? closeMobileMenu(mobNavRef) : openMobileMenu(mobNavRef);
                    animateBurgerMenu(isOpen, burgerRef);
                }} ref={burgerRef}>
                    <span></span>
                    <span></span>
                </div>
            </nav>
            <div className={navStyles.mobileMenu} ref={mobNavRef}>
                <ul>
                        <li onClick={()=>{
                            setIsOpen(false);
                            animateBurgerMenu(isOpen, burgerRef);
                            closeMobileMenu(mobNavRef);
                            scrollToSection('#about');
                        }}>About</li>
                        <li onClick={()=>{
                            setIsOpen(false);
                            animateBurgerMenu(isOpen, burgerRef);
                            closeMobileMenu(mobNavRef);
                            scrollToSection('#portfolio');
                        }}>Portolio</li>
                        <li onClick={()=>{
                            setIsOpen(false);
                            animateBurgerMenu(isOpen, burgerRef);
                            closeMobileMenu(mobNavRef);
                            scrollToSection('#contact');
                        }}>Contact</li>
                </ul>
            </div>
        </>
    )
}
const LgScreenNavbar = () => {
    return(
        <>
            <nav className={navStyles.navbar}>
                <div onClick={()=>scrollToSection('#intro')}>
                    <span className={`${styles.click}`} 
                        onMouseEnter={(e)=>{
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
                        <li className={styles.click}
                            onMouseEnter={(e)=>{
                                menuOptionHoverOn(e);
                                isClickable();
                            }} 
                            onMouseLeave={(e)=>{
                                menuOptionHoverOff(e);
                                isNotClickable();
                            }} 
                            onClick={()=>scrollToSection('#about')}>About</li>
                        <li className={styles.click}
                            onMouseEnter={(e)=>{
                                menuOptionHoverOn(e);
                                isClickable();
                            }} 
                            onMouseLeave={(e)=>{
                                menuOptionHoverOff(e);
                                isNotClickable();
                            }} 
                            onClick={()=>scrollToSection('#portfolio')}>Portolio</li>
                        <li className={styles.click}
                            onMouseEnter={(e)=>{
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
        </>
    )
}

export default Navbar;
