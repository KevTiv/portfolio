import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { hoverOffJobTitle, hoverOffName, hoverOnJobTitle, hoverOnName, scrollThroughIntro } from '../../animation/introAnimation'

import styles from '../../styles/Styles.module.scss'
import introStyles from '../../styles/Intro.module.scss'
import { scrollToSection } from '../../animation/navbarAnimation'
import { isClickable, isNotClickable } from '../../animation/globalAnimation'


const Intro = () => {
    const introSectionRef = useRef<HTMLDivElement>(null);
    const [isMediaMobile, setMediaMobile] = useState<boolean>(false);
    const [isBrowserSafari, setIsBrowserSafari] = useState<boolean>(false);

    useEffect(() =>{
        setMediaMobile(window.innerWidth <= 640 ? true : false);
        
        window.addEventListener('resize',()=>{
            setMediaMobile(window.innerWidth <= 640 ? true : false);
        });
        scrollThroughIntro(introSectionRef);

        //Check if browser is safari
        // If yes do not show profile pic animation because it doesn't render correctly on safari browser
        // TODO adjust safari animation for profile picture
        setIsBrowserSafari(navigator.userAgent.indexOf("Safari") !== -1 ? true : false);
    },[]);

    return (
        <>
            <div className={`${introStyles.intro} ${styles.components}`} ref={introSectionRef}>
                <div>
                    <div className={introStyles.img_container}>
                        {isMediaMobile ? 
                            <Image src={'/img/hero_img_2.webp'} alt='Lake Kivu, Rwanda' width='512' height='1300' layout='fill' priority/> 
                            : <Image src={'/img/hero_img_1.webp'} alt='Lake Kivu, Rwanda' width='512' height='512' layout='responsive' priority/>
                        }
                    </div>
                    
                    <div className={introStyles.presentation}>
                        <div>
                            <h1 className={`${introStyles.hello_world}`}>
                                Hello World! I'm{' '}
                            <br/>    
                            <span className={`${introStyles.hello_world} ${styles.click}`} 
                                onClick={()=>scrollToSection('#about')}
                                onMouseEnter={()=>{
                                    isClickable();
                                    (!isMediaMobile || !isBrowserSafari) ? 
                                        hoverOnName(introSectionRef) 
                                    : null ;
                                }}   
                                onMouseLeave={()=>{
                                    isNotClickable();
                                    hoverOffName(introSectionRef);
                                }}
                            > 
                                Kevin C. Tivert
                            </span>
                            </h1>
                        </div>
                        <div> 
                            <h2 className={`${introStyles.job_title} ${styles.click}`} 
                                onClick={()=>scrollToSection('#portfolio')}
                                onMouseEnter={()=>isClickable()}  
                                onMouseLeave={()=>isNotClickable()}
                            >
                                Web developper
                            </h2>
                        </div>
                        <div className={`${introStyles.profile_img_container} profile_animation`}>
                            <Image src={'/img/hero_img_3.webp'} alt='A dev with his dog' layout='fill' priority/> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Intro;
