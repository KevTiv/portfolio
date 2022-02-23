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
                        <div>
                            <h1 className={`${introStyles.hello_world} ${introStyles.hello_hover_first_part}`}>
                                Hello World! I'm{' '}
                            <br/>    
                            <span className={`${introStyles.hello_world} ${introStyles.hello_hover_second_part} ${styles.click}`} 
                                onClick={()=>scrollToSection('#about')}
                                onMouseEnter={()=>{isClickable()}}   
                                onMouseLeave={()=>{isNotClickable()}}
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
                        
                    </div>
                </div>
            </div>
        </>
    )
};

export default Intro;
