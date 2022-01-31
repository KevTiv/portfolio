import styles from '../../styles/Styles.module.scss'
import portfolioStyles from '../../styles/Portfolio.module.scss'
import { useRef, useEffect, MouseEvent, useState, RefObject } from 'react'
import { contentSectionAppear, titleAnimation, titleAnimationOff } from '../../animation/globalAnimation'
import { projectEntryAppear, revealProjectContent } from '../../animation/portfolioAnimation'

const Portfolio = () => {

    const portfolioSectionRef = useRef<HTMLDivElement>(null);
    const ballRef = useRef<HTMLDivElement>(null);

    
    const titleHoverOn = (e:MouseEvent)=>{
        titleAnimation(e.clientX, ballRef);
        
    }
    const titleHoverOff = (e:MouseEvent)=>{
        titleAnimationOff(e.clientX, ballRef);
    }
    useEffect(() => {
        contentSectionAppear(portfolioSectionRef);
    },[]);

  return (
      <>
        <div id="portfolio" className={`${styles.components} ${portfolioStyles.portfolioContent} ${styles.main}`} ref={portfolioSectionRef}>
            <div className={styles.content}>
                <div className={styles.title_container} onMouseEnter={(e)=>titleHoverOn(e)} onMouseLeave={(e)=>titleHoverOff(e)}>
                    <div className={styles.ball_slide} ref={ballRef}>
                        <span className={styles.ball}></span>
                    </div>
                    <h2 className="titleAnimation">Portfolio</h2>
                    <h2 className="titleAnimation">Portfolio</h2>
                    <h2 className="titleAnimation">Portfolio</h2>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                    totam maiores.
                </p>
                <div className={portfolioStyles.projectPanel}>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                    <Project portfolioSectionRef={portfolioSectionRef}/>
                </div>
            </div>
        </div>
      </>
  )
};

type projectProps={
    portfolioSectionRef:RefObject<HTMLDivElement>,
}

const Project = ({portfolioSectionRef}:projectProps)=>{
    const [expandProject, setExpand] = useState<boolean>(true);
    const projectEntryRef = useRef<HTMLDivElement>(null);
    const Arrow = <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3.5vw" height="3.5vw" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16"><g fill="#eb5d29"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/></g></svg>;

    useEffect(() => {
        projectEntryAppear(portfolioSectionRef, projectEntryRef);
    },[])

    return(
        <>
            <div className={portfolioStyles.projectEntry} ref={projectEntryRef} 
                onClick={()=>{
                    setExpand(!expandProject);
                    revealProjectContent(projectEntryRef, expandProject)
                }}>
                <div className={portfolioStyles.project_title}>
                    <h3>Lorem</h3>
                    <button onClick={()=>{
                        setExpand(!expandProject);
                        revealProjectContent(projectEntryRef, expandProject)
                    }}>
                        {Arrow}
                    </button>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Libero doloremque eaque fugit repudiandae accusamus nostrum deleniti 
                    totam maiores, enim ab cum numquam reiciendis similique tempora ad. Quasi 
                    repellendus excepturi harum!
                </p>
            </div>
        </>
    )
}

export default Portfolio;
