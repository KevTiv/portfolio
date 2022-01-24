import Image from 'next/image'
import { useEffect, useRef } from 'react';

import introStyles from '../../styles/Intro.module.scss'

const Intro = () => {
    const introPresentationRef = useRef<HTMLDivElement>(null);

    useEffect(() =>{

    },[]);
    return (
        <>
            <section id="intro">
                <div className={introStyles.intro}>
                    <div>
                        <div className={introStyles.img_container}>
                            <Image src={'/img/hero_img_1.webp'} alt='Lake Kivu, Rwanda' width='2400' height='2400' layout='responsive'/>
                        </div>
                        {/* <div className={introStyles.img_container}>
                            <Image src={'/img/hero_img_2.webp'} alt='Saint-Chamond, France' width='2400' height='2400' layout='responsive'/>
                        </div> */}
                        {/* <div className={introStyles.img_dev}>
                            <Image src={'/img/hero_img_3.webp'} alt='Kevin Tivert, web dev' width='421' height='593' />
                        </div> */}
                        <div className={introStyles.presentation} ref={introPresentationRef}>
                            <h2 className={introStyles.hello}>Hello World! I'm Kevin C. Tivert.</h2>
                            <h3>Web developper</h3>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
};

export default Intro;
