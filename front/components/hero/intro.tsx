import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import imgBannerSrc from '../../public/img/hero_img_1.webp'
import { scrollThroughIntro } from '../../animation/introAnimation'

import styles from '../../styles/Styles.module.scss'
import introStyles from '../../styles/Intro.module.scss'


const Intro = () => {
    const introSectionRef = useRef<HTMLDivElement>(null);
    useEffect(() =>{
        scrollThroughIntro(introSectionRef);

    },[]);

    return (
        <>
            <div className={`${introStyles.intro} ${styles.components}`} ref={introSectionRef}>
                <div>
                    <div className={introStyles.img_container}>
                        {/* <Image src={'/img/hero_img_2.webp'} placeholder="blur" blurDataURL='/img/load_placeholder.webp' alt='Saint-Chamond, France' width='512' height='512' layout='responsive' priority/> */}
                        <Image src={'/img/hero_img_1.webp'} alt='Lake Kivu, Rwanda' width='512' height='512' layout='responsive' priority/>
                    </div>
                    {/* <div className={introStyles.img_container}>
                        <Image src={'/img/hero_img_2.webp'} alt='Saint-Chamond, France' width='2400' height='2400' layout='responsive'/>
                    </div> */}
                    {/* <div className={introStyles.img_dev}>
                        <Image src={'/img/hero_img_3.webp'} alt='Kevin Tivert, web dev' width='421' height='593' />
                    </div> */}
                    <div className={introStyles.presentation}>
                        <div>
                            <h2 className={`${introStyles.hello_world} ${introStyles.hello_hover}`}>Hello World! I'm </h2><h2 className={introStyles.hello_world}> Kevin C. Tivert</h2>
                        </div>
                        <h3 className={introStyles.job_title}>Web developper</h3>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Intro;
