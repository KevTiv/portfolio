import styles from '../../styles/Styles.module.scss'
import aboutStyles from '../../styles/About.module.scss'
import { useEffect, useRef, MouseEvent } from 'react';
import { contentSectionAppear } from '../../animation/globalAnimation';


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
                    
                    <h1 className="titleAnimation"> About</h1>
                    <h1 className="titleAnimation">About</h1>
                    <h1 className="titleAnimation">About</h1>
                </div>
                <p>
                    Hi! I'm a junior web developer that loves to create cool stuff for the internet.
                    It all started with a Hello World program in a command line and morphed into the objective 
                    of understanding and being able to create unique experiences for the web.
                </p>
                <p>
                    Since graduating in 2021 with a B.Sc. in Computer Science, I have focused on learning the ropes of being a full-stack web developer.
                    I especially like front-end development because it is a nice mix of arts and engineering. The creative freedom and technical challenges 
                    present in front-end development are fascinating.
                </p>
                <p>
                    I'm always working on improving my understanding of web development. Currently, I have been fascinated by the design 
                    aspect of projects shown on websites such as Awwwards or CSS Design Awards. As well as projects by talented developers like Aristide Benoist 
                    or Benjamin Code which I have been copying as practice material.
                </p>
            </div>
        </div>
    </>
  )
};

export default About;
