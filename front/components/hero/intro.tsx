import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import imgBannerSrc from '../../public/img/hero_img_1.webp'
import { hoverOffJobTitle, hoverOffName, hoverOnJobTitle, hoverOnName, scrollThroughIntro } from '../../animation/introAnimation'

import styles from '../../styles/Styles.module.scss'
import introStyles from '../../styles/Intro.module.scss'
import { scrollToSection } from '../../animation/navbarAnimation'
import { isClickable, isNotClickable } from '../../animation/globalAnimation'


const Intro = () => {
    const introSectionRef = useRef<HTMLDivElement>(null);
    const [isMediaMobile, setMediaMobile] = useState<boolean>(false);

    useEffect(() =>{
        setMediaMobile(window.innerWidth <= 640 ? true : false);
        
        window.addEventListener('resize',()=>{
            setMediaMobile(window.innerWidth <= 640 ? true : false);
        });
        scrollThroughIntro(introSectionRef);

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
                        <div onMouseEnter={(()=>hoverOnName(introSectionRef))} onMouseLeave={()=>hoverOffName(introSectionRef)}>
                            <span className='h2BgAnimation'></span>
                            <h1 className={`${introStyles.hello_world} ${introStyles.hello_hover_first_part}`}>Hello World! I'm </h1><h1 className={`${introStyles.hello_world} ${styles.focus} ${styles.click}`} onClick={()=>scrollToSection('#about')}
                            onMouseEnter={()=>{isClickable()}}   
                            onMouseLeave={()=>{isNotClickable()}}
                            > Kevin C. Tivert</h1>
                        </div>
                        <div onMouseEnter={()=>hoverOnJobTitle(introSectionRef)} onMouseLeave={()=>hoverOffJobTitle(introSectionRef)}> 
                            <span className="h3BgAnimation"></span>  
                            <h2 className={`${introStyles.job_title} ${styles.focus} ${styles.click}`} 
                                onClick={()=>scrollToSection('#portfolio')}
                                onMouseEnter={()=>isClickable()}  
                                onMouseLeave={()=>isNotClickable()}
                            >Web dev</h2> <h2 className={`${introStyles.job_title} ${introStyles.job_hover}`}>elopper</h2>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
};

export default Intro;
