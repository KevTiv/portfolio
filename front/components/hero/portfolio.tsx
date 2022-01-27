import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect } from 'react';
import { contentSectionAppear } from '../../animation/globalAnimation';

const Portfolio = () => {

    const portfolioSectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        contentSectionAppear(portfolioSectionRef);
    },[]);

  return (
      <>
        <div id="portfolio" className={`${styles.components} ${portfolioStyles.portfolioContent} ${styles.main}`} ref={portfolioSectionRef}>
            <div className={styles.content}>
                <div className={styles.title_container}>
                    <h2 className="titleAnimation">Portfolio</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                    totam maiores.
                </p>
                <div className={portfolioStyles.projectPanel}>
                    <div className={portfolioStyles.projectEntry}>
                        <h3>Lorem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                            totam maiores, enim ab cum numquam reiciendis similique tempora ad. Quasi 
                            repellendus excepturi harum!
                        </p>
                    </div>
                    <div className={portfolioStyles.projectEntry}>
                        <h3>Lorem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                            totam maiores, enim ab cum numquam reiciendis similique tempora ad. Quasi 
                            repellendus excepturi harum!
                        </p>
                    </div>
                    <div className={portfolioStyles.projectEntry}>
                        <h3>Lorem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                            totam maiores, enim ab cum numquam reiciendis similique tempora ad. Quasi 
                            repellendus excepturi harum!
                        </p>
                    </div>
                    <div className={portfolioStyles.projectEntry}>
                        <h3>Lorem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                            totam maiores, enim ab cum numquam reiciendis similique tempora ad. Quasi 
                            repellendus excepturi harum!
                        </p>
                    </div>
                    <div className={portfolioStyles.projectEntry}>
                        <h3>Lorem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                            totam maiores, enim ab cum numquam reiciendis similique tempora ad. Quasi 
                            repellendus excepturi harum!
                        </p>
                    </div>
                    <div className={portfolioStyles.projectEntry}>
                        <h3>Lorem</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                            Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                            totam maiores, enim ab cum numquam reiciendis similique tempora ad. Quasi 
                            repellendus excepturi harum!
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </>
  )
};

export default Portfolio;
