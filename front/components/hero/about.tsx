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
                    
                    <h2 className="titleAnimation"> About</h2>
                    <h2 className="titleAnimation">About</h2>
                    <h2 className="titleAnimation">About</h2>
                </div>
                <p>
                    Hi! I'm a software engineer that loves to create staff for the internet.
                    It all started with a Hello World program in my command line and grew in a passion for creating unique experience. 
                </p>
                <p>
                    Since graduating in early 2021 with a B.Sc. in Computer Science, I have focus on learning the ropes of being a fullstack web developper.
                    I especially like front end development because it is beautiful mixture of arts and engineering. The creative freedom it offers talks a lot to my creative side.
                </p>
                <p>
                    I'm currently working on improving my design skills, by taking inspiration from awwwards submissions, and developpers such as Aristide Benoist, Benjamin Code, Wrong Akram, and Kevin Powell just cite a few.
                    I'm also learning Ruby on Rails with the Odin Project course.
                </p>
            </div>
        </div>
    </>
  )
};

export default About;
