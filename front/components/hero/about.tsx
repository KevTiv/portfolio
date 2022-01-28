import styles from '../../styles/Styles.module.scss'
import aboutStyles from '../../styles/About.module.scss'
import { useEffect, useRef } from 'react';
import { contentSectionAppear, h2TitleAnimation } from '../../animation/globalAnimation';

const About = () => {
    const aboutSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        contentSectionAppear(aboutSectionRef);
    },[]);

  return (
    <>
        <div id="about" className={`${styles.components} ${aboutStyles.about_content} ${styles.main} ${styles.text_content}`} ref={aboutSectionRef}>
            <div className={styles.content}>
                <div className={styles.title_container}>
                    <h2 className="titleAnimation">
                        About
                    </h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ab, facere voluptatibus. Perspiciatis, voluptas. Praesentium exercitationem 
                    voluptate, ratione aspernatur aperiam cumque necessitatibus ea sapiente maiores harum 
                    ad modi quidem labore quo.
                </p>
            </div>
        </div>
    </>
  )
};

export default About;
