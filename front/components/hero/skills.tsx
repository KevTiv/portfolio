import styles from '../../styles/Styles.module.scss'
import skillStyles from '../../styles/Skills.module.scss'
import { useEffect, useRef } from 'react';
import { contentSectionAppear, h2TitleAnimation } from '../../animation/globalAnimation';

const Skills = () => {

  const skillSectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        contentSectionAppear(skillSectionRef);
    },[]);
    
  return (
    <>
      <div id="skills" className={`${styles.components} ${skillStyles.skill_content} ${styles.main}`} ref={skillSectionRef}>
          <div className={styles.content}>
            <div className={styles.title_container}>
              <h2 className="titleAnimation">
                Skills
              </h2>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                totam maiores, enim ab cum numquam reiciendis similique tempora ad. Quasi 
                repellendus excepturi harum!
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                totam maiores, enim ab cum numquam reiciendis similique tempora ad. Quasi 
                repellendus excepturi harum!
            </p>
          </div>
      </div>
    </>
  )
};

export default Skills;
