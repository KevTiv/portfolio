import styles from '../../styles/Styles.module.scss'
import skillStyles from '../../styles/Skills.module.scss'

const Skills = () => {
  return (
    <>
        <section id="skills" className={skillStyles.skill_content}>
            <div className={`${styles.components} ${styles.main}`}>
                <h2>Skills</h2>
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
        </section>
    </>
  )
};

export default Skills;
