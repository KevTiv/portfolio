import styles from '../../styles/Styles.module.scss'
import aboutStyles from '../../styles/About.module.scss'
import { useRef } from 'react';

const About = () => {
    const aboutSectionRef = useRef<HTMLDivElement>(null);
  return (
    <>
        <section id="about" className={aboutStyles.about_content}>
            <div className={`${styles.components} ${styles.main}`} ref={aboutSectionRef}>
                <h2>
                    About
                </h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Ab, facere voluptatibus. Perspiciatis, voluptas. Praesentium exercitationem 
                    voluptate, ratione aspernatur aperiam cumque necessitatibus ea sapiente maiores harum 
                    ad modi quidem labore quo.
                </p>
            </div>
        </section>
    </>
  )
};

export default About;
