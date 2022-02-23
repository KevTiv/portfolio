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
                    Hi! I'm a junior web developer that loves to create cool staff for the internet.
                    It all started with a Hello World program in a command line and grew in a passion for creating unique experience. 
                </p>
                <p>
                    Since graduating in 2021 with a B.Sc. in Computer Science, I have focus on learning the ropes of being a fullstack web developper.
                    I especially like front end development because it is a nice mix of arts and engineering. The creative freedom and technical challenges present in front end development is really fascinating.
                </p>
                <p>
                    I'm currently working on improving my design skills, by taking inspiration from awwwards site of the day/ month/ year, and developpers such as Aristide Benoist, Benjamin Code, Wrong Akram, and Kevin Powell just cite a few.
                    And improving my back end development skills and knowledge throught building fullstack projects and completing courses such as the Odin Project.
                </p>
            </div>
        </div>
    </>
  )
};

export default About;
